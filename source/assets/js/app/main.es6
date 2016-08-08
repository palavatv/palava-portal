document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<PalavaRouter />, document.getElementById("app"))
})

// # @palavaPortal = angular.module('palava-portal', ['$strap.directives'])
// # <% require 'digest/sha2' %>
// # plvAssetVersion = "<%= system('git rev-parse HEAD > /dev/null') ? Digest::SHA512.hexdigest(rand().to_s) : Digest::SHA512.hexdigest(`git rev-parse HEAD`)  %>"

// # @palavaPortal.run ['$location', '$rootScope', '$routeParams', ($location, $rootScope, $routeParams) ->
// #   setupTitle = (current) ->
// #     if current && current.$$route && current.$$route.title
// #       $rootScope.title = 'palava.tv | ' + current.$$route.title
// #     else
// #       $rootScope.title = 'palava.tv'

// #   setupForceSupport = ->
// #     if $routeParams.supported == '0'
// #       $rootScope.forceSupport = false
// #     else if $routeParams.supported == '1'
// #       $rootScope.forceSupport = true
// #     else
// #       $rootScope.forceSupport = null

// #   $rootScope.$on '$routeChangeSuccess', (event, current, previous) ->
// #     setupTitle(current)
// #     setupForceSupport()
// #     angular.element('.modal-backdrop').hide()
// # ]
