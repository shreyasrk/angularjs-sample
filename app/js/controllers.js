'use strict';

/* Controllers */

var memberAppControllers = angular.module('memberAppControllers', []);

memberAppControllers.controller("MemberListCtrl", ['$scope', '$http', '$filter', 
		function($scope, $http, $filter) {
		    $scope.name = "Shreyas";
		    $http.get('data/memberdata.json').success(function(data) {
				$scope.members = data;  
			});

		    $scope.getMemberList = function getMemberList(fieldvalue) {
		   		$scope.filteredmembers = $filter('memberFirstNameExact')($scope.members, fieldvalue);
		    };

  }]);
