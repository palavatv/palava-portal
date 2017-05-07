class StartPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickPrivate = this.handleClickPrivate.bind(this)
    this.state = {
      roomId: '',
      noSupport: false,
    }
  }

  componentWillMount() {
    if( this.props.params.supported === '0' ||
        this.props.params.supported === undefined && palava.browser.checkForWebrtcError() ){
      this.setState({
        noSupport: true
      })
    }
  }

  render() {
    if(this.state.noSupport){
      var joinRoomFieldsOrNoSupport = <div className="hide nosupport">
        <p><strong>Sorry!</strong> Your web browser is not compatible with the latest technologies for video communication on the web. In order to use <a href="/info/how">palava</a>, you will need to install a web browser that supports WebRTC:</p>
        <SupportList/>
      </div>
    } else {
      var joinRoomFieldsOrNoSupport = <div className="join-room-fields">
        <div className="input-append">
          <input type="text"
              autoFocus
              maxLength="50"
              name="room_id"
              id="room_id"
              className="input-large room-id"
              placeholder="Conference Name"
              value={this.state.roomId}
              onChange={this.handleChange}
              ref={ (input) => this.input = input }
              />
          <button className="btn btn-primary btn-go" onClick={this.handleClick}>▸</button>
        </div>
        <span className="button-separator">or</span>
        <button className="btn btn-warning btn-private" onClick={this.handleClickPrivate}>Private</button>
      </div>
    }

    return <div id="wrap">
      <div className="homepage earth">
        <div className="content container">
          <img src="/assets/images/palava-papagei.svg" alt="palava.tv" onClick={ () => this.input.focus() } />
          <form className="join-room" onSubmit={this.handleClick}>
            { joinRoomFieldsOrNoSupport }
          </form>
        </div>
      </div>
      <GitHubRibbon/>
      <Footer/>
    </div>
  }

  handleChange(e) {
    this.setState({roomId: e.target.value})
  }

  handleClick(e) {
    e.preventDefault()
    if(this.state.roomId){
      ReactRouter.browserHistory.push(encodeURIComponent(this.state.roomId))
    } else {
      ReactRouter.browserHistory.push(guid())
    }
  }

  handleClickPrivate(e) {
    e.preventDefault()
    ReactRouter.browserHistory.push(guid())
  }
}
