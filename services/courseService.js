courses.service("courseService", function($http) {

  this.getCourses = function () {
    $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses").then(function(response){
      return response.data;
    });
  }

  this.getCourse = function (courseId) {
    $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses/" + courseId).then(function(response){
      return response.data;
    });
  }

  this.getCourseRounds = function (courseId) {
    $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses/" + courseId + "/rounds").then(function(response){
      return response.data;
    });
  }
});
