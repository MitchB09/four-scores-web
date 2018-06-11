rounds.controller("roundController", function($scope, $http, $location) {

    $scope.round = {};
    $scope.round.playerRounds = [];
    $http.defaults.useXDomain = true;

    var courseId = $location.search().courseId;

    if (!courseId){
      courseId = 1;
    }

    $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses/" + courseId).then(function(response){
      $scope.course = response.data;
    });
    $http.get(window.__env.apiUrl + window.__env.baseUrl + "players").then(function(response){
      $scope.players = response.data;
    });

    $scope.addPlayer = function(){
      var playerRound = {};
      playerRound.player = $scope.newPlayer;
      $scope.round.playerRounds.push(playerRound);
      var index = $scope.players.map(function(e) { return e.id; }).indexOf($scope.newPlayer.id);
      if (index != -1){
        $scope.players.splice(index, 1);
      };
    }

    $scope.getTotal = function(playerRound){
      playerRound.totalStrokes = 0;
      for(var score in playerRound.scores){
        playerRound.totalStrokes += parseInt(playerRound.scores[score].strokes);
      }
    }
});
