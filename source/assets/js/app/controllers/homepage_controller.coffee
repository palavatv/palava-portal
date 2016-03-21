#= require app/app

@palavaPortal.controller('HomepageController', ['$scope', '$routeParams', '$location', '$timeout', ($scope, $routeParams, $location, $timeout) ->
  $ ->
    if $routeParams.subscribe || $routeParams.signup
      $('.join-room-fields').hide()
      $('.subscribe-info').show()
      $timeout( ->
        $('.subscribe').click()
      , 100)
    else if $scope.forceSupport == false || $scope.forceSupport == null && e = palava.browser.checkForWebrtcError()
      $('.join-room-fields').hide()
      $('.nosupport').show()
    else
      $('.earth img, .earth strong').click -> $('#room_id').focus(); true
      $('#room_id').focus()

  		$('.join-room button.btn-go').click (e) ->
        roomName = $('#room_id').val()
        if roomName
          $location.path('/' + roomName)
        else
          $location.path('/' + guid())
        $scope.$apply()
        false

      $('.join-room button.btn-private').click ->
        $location.path('/' + guid())
        $scope.$apply()
        false

      $('.join-room').submit ->
        alert('submit triggerd')
        $('.join-room .btn-go').click()
        false
])
