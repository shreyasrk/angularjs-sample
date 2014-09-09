'use strict';

/* Controllers */

var memberApp = angular.module('memberApp', []);

memberApp.controller('MemberListCtrl', function($scope, $http) {
    $scope.name = "Shreyas";
    
    $scope.getMemberList(function($http){
      $http.get('data/memberdata.json').success(function(data){
        $scope.members = data;  
      });
    });
  });
