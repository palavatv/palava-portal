# # require app/app

# @palavaPortal.controller('SorryController', ['$scope', '$routeParams', '$location', ($scope, $routeParams, $location) ->
#   $ ->
#     switch $routeParams.code
#       when 'wrong_confirmation_token'
#         $('.sorry-explaination').text 'We could not confirm your email addres. Maybe your email program displayed the url incorrectly. Please try again or write to contact@palava.tv for further assistance!'
#       when 'noone_to_unsubscribe'
#         $('.sorry-explaination').text 'We did not find you in our database! Maybe you already have unsubscribed?'
#       else
#         $('.sorry-explaination').html 'Something did not work correctly, which is probably our fault.<br/> Please try again later!'
# ])
