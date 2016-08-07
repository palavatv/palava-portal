// var templateString = '\
// <a ng-show="peer.hasAudio() && !peer.isLocal()" ng-click="toggleMute()" href="javascript:void(0)" class="plv-video-mute">\
//   <span ng-show="peer.isMuted()">&#x1f508;</span>\
//   <span ng-show="!peer.isMuted()">&#x1f50a;</span>\
// </a>\
// <span ng-show="!peer.hasAudio() && (!peer.isLocal() || !rtc.userMedia.config.audio)" class="plv-video-mute">&#x1f507;</span>\
// \
// <span ng-show="!peer.isLocal()" class="plv-video-heading">\
//   {{peer.status.name || "Anonymous"}}\
// </span>\
// \
// <span ng-show="peer.isLocal()" class="plv-video-heading">\
//   {{peer.status.name || "You"}}\
//   <a href="javascript:void(0)" class="plv-change-name" data-title="Change your Display Name" data-placement="bottom" bs-popover="\'html/shared/change_name.html\'">\
//     Options\
//   </a>\
// </span>\
// \
// <div ng-hide="peer.isReady()" class="plv-video-like"></div>\
// <webrtc-stream ng-if="peer.isReady()" peer="peer" poster="/assets/images/poster.png"></webrtc-stream>\
// '

// angular.module('palava-portal').directive('palavaPeer', [function(){
//   return {
//     restrict: 'A',
//     link: function($scope, $elem, $attrs){
//       $elem.find('video').on('click', function(){ $scope.setPeerOnStage($scope.peer); });

//       $scope.toggleMute = function(){ // do it in some weird way to keep chrome happy
//         $scope.peer.toggleMute();
//         $elem.find('.plv-video-mute').attr('data-peer-muted', $scope.peer.isMuted());
//         $scope.applyMuteStatuses();
//       }

//       // initial audio activation chrome bug
//       $scope.$watch('peer.ready', function(ready){
//         if(ready && !$scope.peer.isLocal()){
//           palava.browser.fixAudio($('.plv-video-wrapper[data-peer-id=' + $scope.peer.id + ']'));
//         }
//       });
//     },
//     template: templateString
//   };
// }]);
