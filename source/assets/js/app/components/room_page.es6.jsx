const RoomPage = (props) => {
  const encodedRoomId = props.params.roomId
  const readableRoomId = props.params.roomId
  const palavaDomain = "palava.tv"
  const roomClasses = ""

  return (
    <div>
      <nav className="navbar navbar-fixed-top">
        <div className="navbar-inner conference-nav">
          <p id="palava-alert" className="alert hide">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <span className="alert-content"></span>
          </p>

          <p id="share-link-text" className="pull-right">
            <strong>copy and share this link to invite people to the conference </strong>
            <span id="share-link" tabIndex="0" onClick={(event) => event.target.select()}>{palavaDomain}/{encodedRoomId}</span>
          </p>

          <div className="navbar-header">
            <a href="/{encodedRoomId}" className="{roomClasses}">{readableRoomId}</a>
          </div>
        </div>
      </nav>

      <div id="conference" className="container-fluid">
        <div className="row-fluid row">

          <div className="span-fixed-sidebar plv-stage-container">
            <div className="row-fluid">
              <div className="stage plv-stage">
                <div ng-show="state.peerOnStage"><webrtc-stream peer="state.peerOnStage"></webrtc-stream></div>
                <div id="plv-stage-placeholder" ng-hide="state.peerOnStage">
                  You are all set! You can now:
                  <ul>
                    <li>share the link to this conference</li>
                    <li>click on a small video to make it big</li>
                    <li>double click on a video to set it to fullscreen mode</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="plv-video-bar">
            <aside className="well sidebar-nav-fixed">
              <ul className="nav plv-participants">
                <li palava-peer className="plv-video-wrapper" ng-repeat="peer in rtc.room.getAllPeers() | orderBy: 'joinTime'" data-peer-id="{{peer.id}}" ng-className="{'plv-active-video-wrapper': peer == state.peerOnStage }">
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}