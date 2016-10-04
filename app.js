
'use strict'
angular.module('moviecat',[
	'ngRoute',
	'moveDetail',
	'moviecat.movie_list',
	'moviecat.directives.auto_focus'
])
.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({redirectTo :'/in_theaters/1' })
}])
.controller('searchController',['$scope','$route',function($scope,$route){
	$scope.searchText='';
	$scope.search = function(){console.log($scope.searchText)
		$route.updateParams({crate:'search',q : $scope.searchText})
	}
}]);
// .controller('NavController',[
// 	'$scope',
// 	'$location',
// 	function($scope,$location){
// 		// $scope.location = $location;
// 		// $scope.type = '';
// 		//  $scope.$watch('location.path()',  function(newValue, oldValue) {
//   //           if(newValue.startsWith('/top250')){
//   //           	$scope.type='top250';
//   //           }else if(newValue.startsWith('/coming_soon')){
//   //           	$scope.type = 'coming_soon'
//   //           }if(newValue.startsWith('/in_theaters')){
//   //           	$scope.type = 'in_theaters'
//   //           }
//   //     });
// 	}
// ])