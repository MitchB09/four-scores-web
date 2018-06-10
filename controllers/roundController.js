rounds.controller("roundController", function($scope, $http) {
    $http.defaults.useXDomain = true;
    $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses/1").then(function(response){
      $scope.course = response.data;
    });
    $http.get(window.__env.apiUrl + window.__env.baseUrl + "players").then(function(response){
      $scope.players = response.data;
    });
});
