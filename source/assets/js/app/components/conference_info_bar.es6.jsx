const ConferenceInfoBar = (props) => {
  return <nav className="navbar navbar-fixed-top">
    <div className="navbar-inner conference-nav">
      <p id="palava-alert" className="alert hide">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <span className="alert-content"></span>
      </p>

      <ShareLink link={ props.roomLink } />

      <div className="navbar-header">
        <Link to="/">
          <img src="/assets/images/palava-papagei.svg" alt="palava.tv" className="brand-logo" />
        </Link>
        <Link to={ "/" + props.encodedRoomId } className={ props.roomClasses }>
          { props.readableRoomId }
        </Link>
      </div>
    </div>
  </nav>
}