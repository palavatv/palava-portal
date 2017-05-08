const JoinErrorModal = (props) => {
  return <div className="modal hide fade modal-center" id="modal-join-error" data-backdrop="static" data-keyboard="false">
    <div className="modal-header">
      <h3>Could not join this conference</h3>
    </div>
    <div className="modal-body">
      <p>palava could not connect to the server and join this conference room</p>
      <p>This might be caused by an internet connection error</p>
      <p><a href="javascript:window.location.reload()">Please try again later!</a></p>
    </div>
  </div>
}