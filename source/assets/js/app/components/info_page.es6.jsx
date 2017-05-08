const InfoPage = (props) => {
  const infoPage = props.params.infoPage
  if(["ev", "contact", "how"].indexOf(infoPage) == -1){
    ReactRouter.redirectTo("/info/how")
  } else {
    const infoPageComponentName = "Info" + infoPage.charAt(0).toUpperCase() + infoPage.slice(1)
    return React.createElement(window[infoPageComponentName], {})
  }
}

