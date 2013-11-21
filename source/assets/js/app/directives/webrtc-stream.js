angular.module('palava-portal').directive('webrtcStream', function(){
    return {
      restrict: 'E',
      replace: true,
      scope: {
        source: "="
      },
      link: function($scope, $elem, $attrs){
        palava.browser.registerFullscreen($elem, 'dblclick');
        $scope.$watch('source', function(val){
          palava.browser.attachMediaStream($elem, val);
        });
      },
      template: '<video autoplay muted class="plv-video-like" />'
    };
});
