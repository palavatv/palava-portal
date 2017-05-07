const UserMediaConfiguratorModal = (props) => {
  return <div className="modal hide fade modal-center" id="modal-user-media-configurator" data-backdrop="static">
    <div className="modal-header">
      <h3>You are about to join a <a href="/info/how">palava</a> conference!</h3>
    </div>
    <div className="modal-body">
      <p>Please choose which streams you want to send</p>
      <ul className="user-media-buttons">
        <li><button onClick={() => props.initConferenceFn({video: true, audio:true})} id="user-media-video-audio" className="btn btn-primary" autoFocus>Video &amp; Audio</button></li>
        <li><button onClick={() => props.initConferenceFn({video: true, audio:false})} id="user-media-video" className="btn btn-info">Video only</button></li>
        <li><button onClick={() => props.initConferenceFn({video: false, audio:true})} id="user-media-audio" className="btn btn-info">Audio only</button></li>
      </ul>
    </div>
  </div>
}