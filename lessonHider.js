angular.module('directivePractice')
  .directive('lessonHider', function() {

    return {
      scope: {
        lesson: '=',
        dayAlert: '&'
      },
      restrict: 'E',
      templateUrl: 'lessonHider.html',
      controller: function($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
      },
      link: function(scope, element, attrs) {
        scope.getSchedule.then(function(response) {
          scope.schedule = response.data;

          scope.schedule.forEach(function(scheduleDay) {
            if(scheduleDay.lesson === scope.lesson) {
              console.log(scheduleDay);
              element.css('text-decoration', 'line-through')
              scope.lessonDay = scheduleDay.weekday;
              return;
            }

          });
        });
      }

    }

});
