goHome = (append = "") =>
  window.location.href = "/" + append
  setTimeout(() => {
    $('.modal').modal('hide')
  }, 1)
