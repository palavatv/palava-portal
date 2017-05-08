const InfoEv = (props) => {
  return <div className="info">
    <InfoHeader/>

    <main id="ev">
      <h1>Organization</h1>
      <p>We are <strong>palava e. V.</strong>, a German non-profit organization that aims to promote knowledge about decentralized communication technologies like WebRTC. Our three areas of activity are:</p>

      <div className="activity-area">
        <h2>Education</h2>
        <p>We are blogging about new webrtc and palava developments on our blog. We explain how to use new decentral technologies, hold workshops, and give talks from time to time.</p>
      </div>

      <div className="activity-area">
        <h2>Open Source</h2>
        <p>palava is open source software that makes use of the WebRTC technology. See our <a href="https://github.com/palavatv/palava">GitHub profile</a> for more information. Feel free to setup your own palava.</p>
      </div>

      <div className="activity-area">
        <h2>palava.tv</h2>
        <p>As an example of how to use WebRTC to enable a new way of communication, we maintain this page.</p>
      </div>
    </main>

    <div className="plv-mobile-footer">
      <Footer/>
    </div>
    <GitHubRibbon/>
  </div>
}
