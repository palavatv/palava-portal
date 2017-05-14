const UserMediaConfiguratorModal = (props) => {
  return <div className="modal hide fade modal-center" id="modal-user-media-configurator" data-backdrop="static">
    <div className="modal-header">
      <h3>You are about to join a palava conference!</h3>
    </div>
    <div className="modal-body">
      <p>Please choose which media streams you want to send to other participants</p>
      <ul className="user-media-buttons">
        <li><button onClick={() => props.initConferenceFn({video: true, audio:true})} id="user-media-video-audio" className="btn btn-primary">Video &amp; Audio</button></li>
        <li><button onClick={() => props.initConferenceFn({video: true, audio:false})} id="user-media-video" className="btn btn-info">Only Video</button></li>
        <li><button onClick={() => props.initConferenceFn({video: false, audio:true})} id="user-media-audio" className="btn btn-info">Only Audio</button></li>
      </ul>
      <p><Link to="/info/how">click here to learn about palava</Link></p>
    </div>
  </div>
}