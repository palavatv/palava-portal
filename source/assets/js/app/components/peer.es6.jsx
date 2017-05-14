class Peer extends React.Component {
  constructor(props){
    super(props)
  }

  toggleMute(){
    this.props.peer.toggleMute()
    this.forceUpdate()
  }

  render(){
    const props = this.props
    const peer = props.peer
    const toggleMute = this.toggleMute.bind(this)

    if(props.active){
      var activeClassName = " plv-active-video-wrapper"
    } else {
      var activeClassName = ""
    }

    if(peer.isLocal()){
      if(peer.hasAudio() && !props.noLocalAudio){
        var finalVolumeControl = <div className="plv-video-volume">🔊</div>
      } else {
        var finalVolumeControl = <div className="plv-video-volume plv-video-mute">🔇</div>
      }
    } else {
      if(peer.hasAudio()){
        if(peer.isMuted()){
          var volumeControl = <div className="plv-video-volume">🔈</div>
        } else {
          var volumeControl = <div className="plv-video-volume">🔊</div>
        }

        var finalVolumeControl = <a href="javascript:void(0)" onClick={toggleMute}>
          { volumeControl }
        </a>
      } else {
        var finalVolumeControl = <div className="plv-video-volume plv-video-mute">🔇</div>
      }
    }

    if(peer.isReady()){
      var peerVideo = <WebrtcVideo
          peer={peer}
          isMuted={peer.isMuted()}
          clickFn={() => props.setPeerOnStageFn(peer)}
          />
    } else {
      var peerVideo = <div className="plv-video-like"></div>
    }

    return <li className={ "plv-video-wrapper" + activeClassName } data-peer-id={props.id}>
      { peerVideo }
      { finalVolumeControl }
    </li>
  }
}
