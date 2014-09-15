'use strict';

/* Services */
var memberAppServices = angular.module('memberAppServices', ['ngResource']);

memberAppServices.factory('Member', ['$resource', 
	function($resource) {
		return $resource ('data/memberdata.json', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
}]);

