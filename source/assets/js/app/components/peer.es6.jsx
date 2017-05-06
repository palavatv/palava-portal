class Peer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const props = this.props
    const peer = props.peer

    if(props.active){
      var activeClassName = " plv-active-video-wrapper"
    } else {
      var activeClassName = ""
    }

    if(peer.hasAudio() && !peer.isLocal()){
      if(peer.isMuted()){
        var volumeControl = <span>🔈</span>
      } else {
        var volumeControl = <span>🔊</span>
      }
      var finalVolumeControl = <a href="javascript:void(0)" onClick={() => peer.toggleMute()} className="plv-video-mute">
        { volumeControl }
      </a>
    } else if(!peer.hasAudio() && (!peer.isLocal() || props.noLocalAudio)){
      var finalVolumeControl = <span className="plv-video-mute">🔇</span>
    } else {
      var finalVolumeControl = <span/>
    }

    if(peer.isLocal()){
      var peerNameAndOptions = <span className="plv-video-heading">
        { peer.status.name || "You" }
      </span>
      // <a href className="plv-change-name" data-title="Change your Display Name" data-placement="bottom">
      //   Options
      // </a>
    } else {
      var peerNameAndOptions = <span className="plv-video-heading">
        { peer.status.name || "Anonymous" }
      </span>
    }

    if(peer.isReady()){
      var peerVideo = <WebrtcVideo
          peer={peer}
          poster="/assets/images/poster.png"
          clickFn={() => props.setPeerOnStageFn(peer)}
          />
    } else {
      var peerVideo = <div className="plv-video-like"></div>
    }

    return <li className={ "plv-video-wrapper" + activeClassName } data-peer-id={props.id}>
      { finalVolumeControl }
      { peerNameAndOptions }
      { peerVideo }
    </li>
  }
}
