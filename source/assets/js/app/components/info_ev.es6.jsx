const InfoEv = (props) => {
  return (
    <div className="container">
      <div id="ev">
        <p>We are <strong>palava e. V.</strong>, a German non-profit organization that aims to promote knowledge about decentralized communication technologies like WebRTC. Our three areas of activity are:</p>

        <div className="activity-area">
          <h3>Education</h3>
          <p>We are blogging about new webrtc and palava developments on our blog. We explain how to use new decentral technologies, hold workshops, and give talks from time to time.</p>
        </div>

        <div className="activity-area">
          <h3>Maintenance</h3>
          <p>palava is open source software that makes use of the WebRTC technology. See our <a href="https://github.com/palavatv">GitHub profile</a> for more information. Feel free to setup your own palava.</p>
        </div>

        <div className="activity-area">
          <h3>palava.tv</h3>
          <p>As an example of how to use WebRTC to enable a new way of communication, we host this page.</p>
        </div>

        <h2>Supporting us</h2>
        <p>Currently, the best way to support us is using palava.tv and telling other people about it.</p>
      </div>

      <Footer/>
    </div>
  )
}
