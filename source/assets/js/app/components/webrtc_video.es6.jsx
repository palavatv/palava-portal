class WebrtcVideo extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      streamReady: false
    }
  }

  checkIfStreamCanBeAttached(){
    if(this.props.peer.getStream()){
      this.setState({
        streamReady: true
      }, () => {
        palava.browser.attachMediaStream($(this.video), this.props.peer.getStream())
      })
    }
  }

  componentDidMount(){
    palava.browser.registerFullscreen($(this.video), 'dblclick')
    this.checkIfStreamCanBeAttached()
  }

  componentDidUpdate(prevProps, prevState){
    if( this.state.streamReady && !prevState.streamReady ){
      this.checkIfStreamCanBeAttached()
    }
  }

  render(){
    const props = this.props

    let classNames = 'plv-video-like'
    if(props.peer.isLocal()){ classNames += ' plv-local-video' }

    return <video autoPlay muted className={classNames}
        poster="/assets/images/poster.png"
        ref={(video) => { this.video = video }}
        onClick={props.clickFn || (() => {}) }
        />
  }
}
