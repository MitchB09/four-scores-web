rounds.controller("roundController", function($scope, $http, $location) {

    var courseId = $location.search().courseId ? $location.search().courseId : 1;
    var course = {};

    $scope.round = {};
    $scope.round.playerRounds = [];
    $http.defaults.useXDomain = true;
    $scope.round.courseId = courseId;

    $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses/" + courseId).then(function(response){
      $scope.course = response.data;
      course = $scope.course;
    });
    $http.get(window.__env.apiUrl + window.__env.baseUrl + "players").then(function(response){
      $scope.players = response.data;
    });

    $http.get(window.__env.apiUrl + window.__env.baseUrl + "courses/" + courseId + "/rounds").then(function(response){
      $scope.existingRounds = response.data;
    });

    $scope.course = course;

    $scope.addPlayer = function(){
      if($scope.newPlayer){
        var playerRound = {};
        playerRound.scores = [];
        for (var i = 0; i < course.holes.length; i++){
          playerRound.scores[i] = {};
          playerRound.scores[i].hole = course.holes[i]
        }
        playerRound.player = $scope.newPlayer;
        $scope.round.playerRounds.push(playerRound);
        var index = $scope.players.map(function(e) { return e.id; }).indexOf($scope.newPlayer.id);
        if (index != -1){
          $scope.players.splice(index, 1);
        };
      }
    }

    $scope.removePlayer = function(playerRound){
      var index = $scope.round.playerRounds.map(function(e) { return e.player.id; }).indexOf(playerRound.player.id);
      if (index != -1){
        $scope.round.playerRounds.splice(index, 1);
      };
      $scope.players.push(playerRound.player);
    }

    $scope.getTotal = function(playerRound){
      playerRound.totalStrokes = 0;
      for (var i = 0; i < playerRound.scores.length; i++){
        playerRound.totalStrokes += parseInt(playerRound.scores[i].strokes);
      }
    }

    $scope.saveRound = function(round){
      $http.post(window.__env.apiUrl + window.__env.baseUrl + "rounds", $scope.round)
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

    $scope.deleteRound = function(roundId){
      $http.delete(window.__env.apiUrl + window.__env.baseUrl + "rounds/" + roundId)
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
