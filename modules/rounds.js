var env = {};

// Import variables if present (from env.js)
if(window){
  Object.assign(env, window.__env);
}

var rounds = angular.module('rounds', [])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  }]);

rounds.constant('__env', env);
