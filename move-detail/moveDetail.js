(function(angular){
	'use strict';
	// 创建正在热映模块
	var moveDetail=angular.module('moveDetail',['ngRoute','moviecat.services.http'])
	moveDetail.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/detail/:id',{
			templateUrl:'move-detail/view.html',
			controller:'moveDtetailController'
		})
	}]);
	moveDetail.controller('moveDtetailController',[
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService){console.log(111)
			$scope.move={};
			var id = $routeParams.id;
			var address = "https://api.douban.com/v2/movie/subject/"+id;
			HttpService.jsonp(address,{},function(data){
				$scope.move = data;
				$scope.$apply();
				console.log($scope.move)
			})
	}]);
})(angular)