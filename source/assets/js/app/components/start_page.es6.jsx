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
    var forceSupport = new URLSearchParams(window.location.search).get('supported')
    if( forceSupport === "0" ||
        forceSupport === undefined && palava.browser.checkForWebrtcError() ){
      this.setState({
        noSupport: true
      })
    }
  }

  render() {
    if(this.state.noSupport){
      var joinRoomFieldsOrNoSupport = <main className="nosupport">
        <p><strong>Sorry!</strong> Your web browser is not compatible with the latest technologies for video communication on the web. In order to use <a href="/info/how">palava</a>, you will need to install a web browser that supports WebRTC:</p>
        <SupportList/>
      </main>
    } else {
      var joinRoomFieldsOrNoSupport = <div className="join-room-fields">
        <div className="input-append">
          <input type="text"
              autoFocus
              maxLength="50"
              name="room_id"
              id="room_id"
              className="input-large room-id"
              placeholder="Enter a conference name and click"
              value={this.state.roomId}
              onChange={this.handleChange}
              ref={ (input) => this.input = input }
              />
          <button className="btn btn-primary btn-go" onClick={this.handleClick}>go</button>
        </div>
        <div className="button-separator">
          or start a <a href="javascript:void(0)" onClick={this.handleClickPrivate}>secret conference</a>
        </div>
      </div>
    }

    return <div className="homepage earth">
      <div className="content">
        <img src="/assets/images/palava-papagei.svg"
            alt="palava.tv"
            className="palava-logo"
            onClick={ () => this.input && this.input.focus() }
            />
        <form className="join-room" onSubmit={this.handleClick}>
          { joinRoomFieldsOrNoSupport }
        </form>
      </div>
      <div className="plv-mobile-footer">
        <Footer/>
      </div>

      <GitHubRibbon/>
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
