# # require app/app

# @palavaPortal.controller('RegistrationsController', ['$scope', '$http', '$routeParams', '$location', ($scope, $http, $routeParams, $location) ->
#   $scope.fields = ['email', 'password', 'username', 'wants_newsletter']
#   $scope.registration = { email: $routeParams.email }
#   $scope.validationMessages = {}
#   $scope.validationControlGroups = {}
#   $scope.success = false


#   $scope.registerUser = ->
#     $http.post(
#       "/plv/registrations", { registration: $scope.registration }
#     ).success( (data, status, headers, config) ->
#       # $scope.data = data
#       $scope.registration = {}
#       $scope.success = true
#     ).error( (data, status, headers, config) ->
#       switch status
#         when 422
#           for field in $scope.fields
#             if -1 != Object.keys(data.errors).indexOf field
#               message = data.errors[field][0]
#               $scope.validationMessages[field] = message
#               $scope.validationControlGroups[field] = if message.match /already taken/
#                 "info"
#               else
#                 "error"
#             else
#               delete $scope.validationMessages[field]
#               delete $scope.validationControlGroups[field]
#         else
#           console.log 'unknown error'
#     )
# ])
