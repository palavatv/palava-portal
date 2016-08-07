# # require app/app

# # TODO furher angularfying

# @palavaPortal.controller('FeedbackController', ['$scope', '$routeParams', '$http', ($scope, $routeParams, $http) ->
#   ## public functions ##
#   $scope.submitFeedback = ->
#     entry =
#       text: $('.feedback-form textarea').val() # TODO angular
#     if $routeParams.confirmation_token
#       entry.confirmation_token = $routeParams.confirmation_token

#     $http.post(
#       "/plv/feedback", { feedback_entry: entry }
#     ).success( (data, status, headers, config) ->
#       $('.feedback-form').hide() # TODO angular
#       $('.feedback-thank-you').show()
#     ).error( (data, status, headers, config) ->
#       switch status
#         when 422
#           console.log 'validation error'
#         else
#           console.log 'unknown error'
#     )

#   $ -> # TODO angular
#     if $routeParams.confirmed
#       $('#feedback-heading').hide()
#       $('.confirmed-thank-you').show()
#     if $routeParams.unsubscribed
#       $('#feedback-heading').hide()
#       $('.unsubscribed-thank-you').show()

#     $('.feedback-form textarea').focus()
# ])
