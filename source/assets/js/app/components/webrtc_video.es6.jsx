class WebrtcVideo extends React.Component {
  constructor(props){
    super(props)
  }

  attachPeerStream(){
    if(this.props.peer.getStream()){
      palava.browser.attachMediaStream(this.video, this.props.peer.getStream())
    }
  }

  componentDidMount(){
    palava.browser.registerFullscreen(this.video, 'dblclick')

    if(this.props.isMuted){
      this.video.setAttribute('muted', '') // react / jsx workaround
    }

    if(this.props.peer.isReady){
      this.attachPeerStream()
    }
  }

  componentDidUpdate(prevProps, prevState){
    if( this.props.peer.isReady && (
        !prevProps.peer.isReady ||
        this.props.peer != prevProps.peer ) ){
      this.attachPeerStream()
    }

    if(this.props.isMuted){
      this.video.setAttribute('muted', '') // react / jsx workaround
    }
  }

  render(){
    const props = this.props

    let classNames = 'plv-video-like'
    if(props.peer.isLocal()){ classNames += ' plv-local-video' }

        // poster="/assets/images/poster.png"
    return <video
        autoPlay
        muted={props.isMuted}
        className={classNames}
        ref={(video) => { this.video = video }}
        onClick={props.clickFn || (() => {}) }
        />
  }
}
