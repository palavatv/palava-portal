$('.noscript-hint').hide()

$ ->
  ## share link ##
  $(document).on 'click', '#share-link', ->
    window.highlight(this)

  $(document).on 'focus', '#share-link', ->
    setTimeout => window.highlight(this)

  $(document).on 'click', '#share-link-text strong', ->
    $('#share-link').focus()
