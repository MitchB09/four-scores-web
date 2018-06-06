courses.service('courseService', function($http) {
    this.getCourse = function (courseId) {
      $http.get("http://192.168.2.12:8080/courses/" + courseId).then(function(response){
        return response.data
      });
    }

    this.getCourseRounds = function (courseId) {
      $http.get("http://192.168.2.12:8080/courses/" + courseId + "/rounds").then(function(response){
        return response.data
      });
    }
});
