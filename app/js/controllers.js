'use strict';

/* Controllers */

var memberAppControllers = angular.module('memberAppControllers', []);

memberAppControllers.controller("MemberListCtrl", 
	['$scope', '$filter', 'Member',
	function($scope, $filter, Member) {
	    $scope.name = "Shyam";
	    $scope.members = Member.query();

	    $scope.getMemberList = function getMemberList(fieldvalue) {
	   		$scope.filteredmembers = $filter('filter')($scope.members, fieldvalue);
	    };

  }]);
