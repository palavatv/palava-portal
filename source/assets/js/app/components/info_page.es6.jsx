const InfoPage = (props) => {
  const infoPage = props.params.infoPage
  if(["ev", "contact", "how", "privacy"].indexOf(infoPage) == -1){
    setTimeout( () => {
      ReactRouter.browserHistory.replace("/info/how")
    } )
    return <div/>
  } else {
    const infoPageComponentName = "Info" + infoPage.charAt(0).toUpperCase() + infoPage.slice(1)
    return React.createElement(window[infoPageComponentName], {})
  }
}

