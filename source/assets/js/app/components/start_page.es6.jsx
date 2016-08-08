const StartPage = (props) => {
  return (
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
                  <input type="text" maxLength="50" name="room_id" id="room_id" className="input-large room-id" placeholder="Conference Name" />
                  <button className="btn btn-primary btn-go">▸</button>
                </div>
                <span className="button-separator">or</span>
                <button className="btn btn-warning btn-private">Private</button>
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
