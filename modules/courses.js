var env = {};

// Import variables if present (from env.js)
if(window){
  Object.assign(env, window.__env);
}

var courses = angular.module('courses', []);

courses.constant('__env', env);
