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

    $scope.newCourse = {};
    $scope.courseTypes = [
      {"holes":9,  "name": "9 Holes"},
      {"holes":18, "name": "18 Holes"}];

    $scope.initNewCourseHoles = function(){
      $scope.newCourse.holes = []
      for (i = 1; i <= $scope.courseType.holes; i++){
        $scope.newCourse.holes.push(new Object());
        $scope.newCourse.holes[i-1].holeNumber = i
      }
    }

    $scope.saveCourse = function(newCourse){
      $http.post(window.__env.apiUrl + window.__env.baseUrl + "courses", $scope.newCourse)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        })
        .finally(function() {
          console.log("Finally!");
        });
    }

    $scope.deleteCourse = function(courseId){
      $http.delete(window.__env.apiUrl + window.__env.baseUrl + "courses/" + courseId)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        })
        .finally(function() {
          console.log("Finally!");
        });
    }
});
