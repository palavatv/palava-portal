const InfoHow = (props) => {
  return (
    <div className="container">
      <div id="how-it-works">
        <p>
          <strong>palava</strong> is simplistic video communication with your friends and colleagues from within your web browser. No registration or browser plugin required.
        </p>

        <h2>How to use palava?</h2>
        <p>
          You can join or initiate a video conference by simply entering a name for it on the start page and pressing &lt;Enter&gt;. If nobody is in the room, yet, a new one will be automatically created. Your browser will then ask you for access to your microphone and webcam. Pay attention to not overlook it, for example, in Chrome, it is just a small bar at the top. In Firefox, it might take a minute, when joining for the first time. After accepting, you have successfully joined/created the conference and you can start to invite others by sharing your current internet address. Keep it mind that your participants also need a compatible browser:
        </p>
        <SupportList/>
        <p>
          It is possible to create hidden rooms by clicking the &lt;Private&gt; button on the start page. It will create a long random name for the conference, which noone can guess. Share this link as usual to invite you friends. Only people who know this exact link can join.
        </p>

        <h2>How does it work under the hood?</h2>
        <p>
          <strong>palava</strong> is based on atechnology called <a href="https://www.webrtc.org/">Web Real-Time Communication</a> (WebRTC) which enables pluginless video conferencing via peer-to-peer connections. Please see our <a href="https://blog.palava.tv/">blog</a> or our <a href="https://github.com/palavatv/">github page</a> for more technical information.
        </p>
      </div>

      <Footer/>
    </div>
  )
}
