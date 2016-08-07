#  require app/app

# @palavaPortal.controller('ConferenceController', ['$scope', '$rootScope', '$routeParams', '$location', ($scope, $rootScope, $routeParams, $location) ->
#   ## private functions ##
#   verifyRoomId = ->
#     if $scope.roomId.match /^info\//
#       $location.path "/info"
#       $scope.$apply()

#     if $scope.roomId.length > 50
#       $location.path "/" + roomId.substr(0,50)
#       $scope.$apply()

#   setupPrivateRoom = ->
#     $scope.readableRoomId = "Private Conference"
#     $scope.roomClasses = 'palava-private-room'
#     $rootScope.title = 'palava.tv | ' + $scope.readableRoomId

#   setupPublicRoom = ->
#     $scope.roomClasses = 'palava-room'
#     try
#       $scope.readableRoomId = decodeURIComponent $scope.roomId
#     catch e
#       $scope.readableRoomId = $scope.roomId
#     $rootScope.title = 'palava.tv | Conference | ' + $scope.readableRoomId

#   ## init ##
#   $scope.roomId        = $routeParams.roomId
#   verifyRoomId()
#   $scope.encodedRoomId = encodeURIComponent $scope.roomId

#   if $scope.private = /^\w{8}(-\w{4}){3}-\w{12}$/.test $scope.roomId
#     setupPrivateRoom()
#   else
#     setupPublicRoom()
# ])
