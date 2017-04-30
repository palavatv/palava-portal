class StartPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickPrivate = this.handleClickPrivate.bind(this)
    this.state = {roomId: ''}
  }

  render() {
    return(
      <div>
        <div id="wrap">
          <div className="homepage earth">
            <div className="content container">
              <img src="/assets/images/palava-papagei.svg" alt="palava.tv" />
              <form className="join-room">
                <div className="hide nosupport">
                  <p><strong>Sorry!</strong> Your web browser is not compatible with the latest technologies for video communication on the web. In order to use <a href="/info/how">palava</a>, you will need to install a web browser that supports WebRTC:</p>
                  <SupportList/>
                </div>
                <div className="join-room-fields">
                  <div className="input-append">
                    <input type="text" maxLength="50" name="room_id" id="room_id" className="input-large room-id" placeholder="Conference Name" value={this.state.roomId} onChange={this.handleChange}/>
                    <button className="btn btn-primary btn-go" onClick={this.handleClick}>▸</button>
                  </div>
                  <span className="button-separator">or</span>
                  <button className="btn btn-warning btn-private" onClick={this.handleClickPrivate}>Private</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <GitHubRibbon/>
        <Footer/>
      </div>
    )
  }

  handleChange(e) {
    this.setState({roomId: e.target.value})
  }

  handleClick(e) {
    e.preventDefault()
    ReactRouter.browserHistory.push(this.state.roomId)
  }

  handleClickPrivate(e) {
    e.preventDefault()
    ReactRouter.browserHistory.push(guid())
  }

}
