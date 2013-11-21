$('.noscript-hint').hide()

$ ->
  ## share link ##
  $(document).on 'click', '#share-link', ->
    window.highlight(this)

  $(document).on 'focus', '#share-link', ->
    setTimeout =>
      window.highlight(this)
    , 1

  $(document).on 'click', '#share-link-text strong', ->
    $('#share-link').focus()

  # TODO Does someone feel like refactoring it to ng, ...?
  $(document).on 'click', '.subscribe', ->
    $('#subscribe-popover').popover 'toggle'
    $('#email').focus()
    false

  $(document).on 'click', '#submit-potential', ->
    potentialSuccess = ->
      $('#subscribe-form').hide()
      $('#subscribe-div .thank-you').show()
      setTimeout ->
        if $('.subscribe-info:visible').length
          location.href = "/"
        else
          $('#subscribe-popover').popover 'hide', ->
            $('#subscribe-form email').val()
            $('#subscribe-div div').hide()
            $('#subscribe-form').show()
      , 3000
    potentialError = (res) ->
      if first_error = JSON.parse(res.responseText).errors.email[0]
        $('#subscribe-form').hide()
        $('#subscribe-div .sorry').text(first_error)
        $('#subscribe-div .sorry').show()
      else
        potentialSuccess()
    $.ajax
      type: "POST"
      url: "/plv/potentials"
      data:
        potential:
          email: $('#email').val()
      success: potentialSuccess
      error: potentialError
    false

  $(document).on 'click', '#subscribe-div .sorry', ->
    $('#subscribe-div .sorry').hide()
    $('#subscribe-div .sorry').text('')
    $('#subscribe-form').show()
    $('#email').focus()