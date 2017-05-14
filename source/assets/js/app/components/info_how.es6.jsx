const InfoHow = (props) => {
  return <div className="info">
    <InfoHeader/>

    <main id="how-it-works">
      <h2>What is palava?</h2>
      <p>
        <strong>palava.tv</strong> is simplistic video communication with your friends and colleagues from within your web browser. No registration or browser plugin required.
      </p>

      <h2>How to use palava?</h2>
      <p>
        You can join or initiate a video conference by simply entering a name for it on the start page and pressing the &lt;Enter&gt; key. If the room is empty yet, it will be automatically created. Your browser will then ask you for access to your microphone and webcam. Pay attention to not overlook it, for example, in Chrome, it is just a small bar at the top. After accepting, you have successfully joined/created the conference and you can start to invite others by sharing your current URL address. Keep it mind that your participants also need a compatible browser:
      </p>
      <SupportList/>
      <p>
        It is possible to create a hidden conference room by clicking the &lt;secret conference&gt; link on the start page. It will create a long random name for the conference, which noone can guess. Share this link as usual to invite you friends. Only people who know this exact link can join.
      </p>

      <h2>How does palava work under the hood?</h2>
      <p>
        <strong>palava.tv</strong> is based on a technology called <a href="https://www.webrtc.org/">Web Real-Time Communication</a> (WebRTC) which enables pluginless video conferencing via peer-to-peer connections. It is built on top of many <a href="https://datatracker.ietf.org/wg/rtcweb/documents/">lower-level standards by the Internet Engineering Task Force</a>. Please see our <a href="https://blog.palava.tv/">blog</a> or our <a href="https://github.com/palavatv/palava">GitHub page</a> for more technical information.
      </p>
    </main>

    <div className="plv-mobile-footer">
      <Footer/>
    </div>
    <GitHubRibbon/>
  </div>
}
