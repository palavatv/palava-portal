const UserMediaHintModal = (props) => {
  return <div className="modal hide fade modal-center" id="modal-user-media" data-backdrop="static" data-keyboard="false">
    <div className="modal-header">
      <h3>Access to your { props.userMediaTitles }</h3>
    </div>
    <div className="modal-body">
      <p>
        Your browser will be asking you for access to your computers' media sources. This might take some seconds. Also make sure that your camera is turned on! After granting these permission, this message will automatically go away and you will be added to the video conference!
      </p>

      <p>
        This is how it might look in your browser. Press Allow to continue:
      </p>
      <img src="/assets/images/chrome-26-hint.png" alt="Screenshot: Chrome asks for WebRTC access"/>

      <div className="alert hide">
        <p>
          You have to allow access to your microphone or<br/>webcam to be able to join the conference!
        </p>
        <p>
          This error might be caused by other programs that are currently using your camera. If you have previously denied this access, you will have to explicitly allow media access in your browser settings (in Chrome, this can be done by clicking on the small camera in your address bar).
        </p>
        <p>
          <a href="javascript:window.location.reload()">Please reload to try again!</a>
        </p>
      </div>
    </div>
  </div>
}