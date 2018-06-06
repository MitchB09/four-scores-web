courses.controller("courseController", function($scope, $http) {
    $http.defaults.useXDomain = true;
    $scope.courseId = 0;
    $http.get("http://192.168.2.12:8080/courses").then(function(response){
      $scope.courses = response.data
    });
    $scope.getCourse = function (courseId) {
      $http.get("http://192.168.2.12:8080/courses/" + courseId).then(function(response){
        alert(response.data);
      });
    }
    $scope.getCourseRounds = function (courseId) {
      $http.get("http://192.168.2.12:8080/courses/" + courseId + "/rounds").then(function(response){
        alert(response.data);
      });
    }
});
