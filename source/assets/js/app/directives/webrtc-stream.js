angular.module('palava-portal').directive('webrtcStream', function(){
    return {
      restrict: 'E',
      replace: true,
      scope: {
        peer: "=",
      },
      link: function($scope, $elem, $attrs){
        palava.browser.registerFullscreen($elem, 'dblclick');
        $scope.$watch('peer.getStream()', function(val){
          palava.browser.attachMediaStream($elem, val);
        });
      },
      template: '<video autoplay muted class="plv-video-like" ng-class="{\'plv-local-video\': peer.isLocal() }" />'
    };
});
