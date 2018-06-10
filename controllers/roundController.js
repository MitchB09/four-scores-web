rounds.controller("roundController", function($scope, $http) {
    $http.defaults.useXDomain = true;
    $http.get("http://192.168.2.12:8080/courses/1").then(function(response){
      $scope.course = response.data;
    });
    $http.get("http://192.168.2.12:8080/players").then(function(response){
      $scope.players = response.data;
    });
});
