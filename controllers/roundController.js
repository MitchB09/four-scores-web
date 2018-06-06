rounds.controller("roundController", function($scope, $http) {
    $http.defaults.useXDomain = true;
    $http.get("http://192.168.2.12:8080/courses/").then(function(response){
      $scope.courses = response.data
    });


});
