const MaintenanceModal = (props) => {
  return <div className="modal hide fade modal-center" id="modal-maintenance" data-backdrop="static" data-keyboard="false">
    <div className="modal-header">
      <h3>Sorry, your connection will be reset!</h3>
    </div>
    <div className="modal-body">
      <p>Because of palava.tv server maintenance, your connection is being lost!<br/>
         We apologize for any inconvenience this may cause.</p>
      <p><a href="javascript:window.location.reload()">Please reload in a few moments!</a></p>
    </div>
  </div>
}