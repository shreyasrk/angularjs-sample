'use strict';

/* App Module */
var memberApp = angular.module('memberApp', 
	['ngRoute', 
	 'memberAppControllers', 
	 'memberAppFilters',
	 'memberAppServices']);

memberApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/index', {
			templateUrl : 'index.html',
			controller : 'MemberListCtrl'
		})
		.otherwise({
			redirectTo : '/index'
		});

	}]);


