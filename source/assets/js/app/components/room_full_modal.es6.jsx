const RoomFullModal = (props) => {
  return <div className="modal hide fade modal-center" id="modal-room-full" data-backdrop="static" data-keyboard="false">
    <div className="modal-header">
      <h3>This conference room is full</h3>
    </div>
    <div className="modal-body">
      <p>You cannot join this conference, because the maximum number of conference participants is reached.</p>
      <p><a href="javascript:window.location.reload()">Please try again later!</a></p>
    </div>
  </div>
}
