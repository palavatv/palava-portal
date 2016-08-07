document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<App />, document.getElementById("app"))
})

// # @palavaPortal = angular.module('palava-portal', ['$strap.directives'])
// # <% require 'digest/sha2' %>
// # plvAssetVersion = "<%= system('git rev-parse HEAD > /dev/null') ? Digest::SHA512.hexdigest(rand().to_s) : Digest::SHA512.hexdigest(`git rev-parse HEAD`)  %>"

// # @palavaPortal.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
// #   $routeProvider.
// #     when('/',                 { templateUrl: '/html/homepage.html?'      + plvAssetVersion, controller: 'HomepageController', }).
// #     when('/info/how',         { templateUrl: '/html/info/how.html?'      + plvAssetVersion, controller: 'StaticController',     title: 'How to Use' }).
// #     when('/info/ev',          { templateUrl: '/html/info/ev.html?'       + plvAssetVersion, controller: 'StaticController',     title: 'e. V.' }).
// #     when('/info/contact',     { templateUrl: '/html/info/contact.html?'  + plvAssetVersion, controller: 'StaticController',     title: 'Contact' }).
// #     when('/info/feedback',    { templateUrl: '/html/info/feedback.html?' + plvAssetVersion, controller: 'FeedbackController',   title: 'Feedback' }).
// #     when('/info/error',       { templateUrl: '/html/info/error.html?'    + plvAssetVersion, controller: 'SorryController',      title: 'Sorry' }).
// #     when('/info',             { redirectTo: '/info/how' }).
// #     when('/:roomId',          { templateUrl: '/html/conference.html?'    + plvAssetVersion, controller: 'ConferenceController' }).
// #     otherwise({ redirectTo: '/' })
// #   $locationProvider.html5Mode true
// # ]

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
