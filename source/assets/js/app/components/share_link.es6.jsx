class ShareLink extends React.PureComponent {
  constructor(props){
    super(props)
  }

  highlight(e) {
    range = document.createRange()
    range.selectNode(e)
    getSelection().removeAllRanges()
    getSelection().addRange(range)
  }

  render() {
    const props = this.props

    return <p id="share-link-text">
      <strong onClick={() => this.shareLink.focus()}>
        copy and share this link to invite people to the conference
      </strong>
      <span
          id="share-link"
          ref={(el) => this.shareLink = el }
          tabIndex="0"
          onFocus={(e) => this.highlight(e.currentTarget)}
          onClick={(e) => this.highlight(e.currentTarget)}
          >
        { props.link }
      </span>
    </p>
  }
}
