@highlight = (e) ->
  range = document.createRange()
  range.selectNode(e)
  getSelection().removeAllRanges()
  getSelection().addRange(range)