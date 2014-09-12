'use strict';

/* Controllers */

var memberAppControllers = angular.module('memberAppControllers', []);

memberAppControllers.controller("MemberListCtrl", function($scope, $http) {
    $scope.name = "Shreyas";
    $http.get('data/memberdata.json').success(function(data) {
		$scope.members = data;  
	});

    $scope.getMemberList = function getMemberList(fieldvalue) {
   		return;
    };

  });
