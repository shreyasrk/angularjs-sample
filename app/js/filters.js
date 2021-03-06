'use strict';

/* Filters */

var memberAppFilters = angular.module('memberAppFilters', []);

/* Optional Custom filter for member's first name search only */
memberAppFilters.filter('memberFirstNameExact', function(){
	return function(members, fieldvalue) {
		var tempMembers = [];
		if (fieldvalue == 'all') {
			return members;
		} else {
			angular.forEach(members, function(member) {
				if (angular.equals(member.first_name, fieldvalue)) {
					tempMembers.push(member);
				}
			});
			return tempMembers;
		}
	};
});
