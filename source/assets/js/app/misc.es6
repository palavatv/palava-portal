palavaAlert = (message) =>
  $('#palava-alert .alert-content').html(message)
  $('#palava-alert').show()

goHome = () =>
  window.location.href = "/"
  setTimeout(() => {
    $('.modal').modal('hide')
  }, 1)
