class WebrtcVideo extends React.Component {
  constructor(props){
    super(props)
  }

  attachPeerStream(){
    if(this.props.peer.getStream()){
      palava.browser.attachMediaStream($(this.video), this.props.peer.getStream())
    }
  }

  componentDidMount(){
    palava.browser.registerFullscreen($(this.video), 'dblclick')
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
  }

  render(){
    const props = this.props

    let classNames = 'plv-video-like'
    if(props.peer.isLocal()){ classNames += ' plv-local-video' }

    return <video autoPlay muted={props.isMuted} className={classNames}
        poster="/assets/images/poster.png"
        ref={(video) => { this.video = video }}
        onClick={props.clickFn || (() => {}) }
        />
  }
}
