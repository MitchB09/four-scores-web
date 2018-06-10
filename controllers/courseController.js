courses.controller("courseController", function($scope, $http) {
    $http.defaults.useXDomain = true;
    $scope.courseId = 0;
    $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses").then(function(response){
      $scope.courses = response.data
    });
    $scope.getCourse = function (courseId) {
      $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses/" + courseId).then(function(response){
        alert(response.data);
      });
    }
    $scope.getCourseRounds = function (courseId) {
      $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses/" + courseId + "/rounds").then(function(response){
        alert(response.data);
      });
    }
});
