const StartPage = (props) => {
  return (
    <div>
      <div id="wrap">
        <div className="homepage earth">
          <div className="content container">
            // image_tag 'palava.png', alt: 'palava.tv'
            <p className="tagline"><strong>browser-to-browser video</strong></p>
            <form className="join-room">
              <div className="hide subscribe-info">
                <p><strong>Thank you</strong> for being interested in palava. Please enter your email address to receive the latest news on palava and WebRTC!</p>
              </div>
              <div className="hide nosupport">
                <p><strong>Sorry!</strong> Your web browser is not compatible with the latest technologies for video communication on the web. In order to use <a href="/info/how">palava</a>, you will need to install a web browser that supports WebRTC:</p>
                 // partial 'html/shared/support_list'
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
