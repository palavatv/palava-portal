const PalavaRouter = (props) => {
  return (
    <ReactRouter.Router history={ReactRouter.browserHistory}>
      <ReactRouter.Route path="/" component={StartPage}/>
      <ReactRouter.Route path="/info/:infoPage" component={InfoPage}/>
      <ReactRouter.Route path="/:roomId" component={RoomPage}/>
    </ReactRouter.Router>
  )
}

// <Route path="*" component={NoMatch}/>
