class PalavaRouter extends React.PureComponent {
  constructor(props){
    super(props)
  }

  routeChange(nextRouteState){
    $('.modal-backdrop').hide()

    if(this.titleFn){
      document.title = 'palava.tv | ' + this.titleFn(nextRouteState.params)
    } else {
      document.title = "palava.tv"
    }
  }

  render(){
    return <ReactRouter.Router history={ReactRouter.browserHistory}>
      <ReactRouter.Route path="/"
          component={StartPage}
          onEnter={this.routeChange}
          />
      <ReactRouter.Route path="/info/:infoPage"
          component={InfoPage}
          titleFn={ (params) => params.infoPage }
          onEnter={this.routeChange}
          />
      <ReactRouter.Route path="/:roomId"
          component={RoomPage}
          titleFn={ (params) => "Conference | " + decodeURIComponent(params.roomId) }
          onEnter={this.routeChange}
          />
      <ReactRouter.Route path="*"
          component={NoPage}
          onEnter={goHome}
          />
    </ReactRouter.Router>
  }
}

const Link = ReactRouter.Link
