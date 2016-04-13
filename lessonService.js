angular.module('directivePractice')
  .service('lessonService', function($http) {

    this.getSchedule = function() {
      return $http({
        method: 'GET',
        url: 'schedule.json'
      });
    };

  })
