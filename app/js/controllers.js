'use strict';

/* Controllers */

var jivaMemberApp = angular.module('jivaMemberApp', []);

jivaMemberApp.controller('MemberListCtrl', function($scope, $http) {
    $scope.name = "Shreyas";
    $http.get('data/memberdata.json').success(function(data){
      $scope.members = data;  
    });
  });

