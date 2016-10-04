(function(angular){
  'use strict';
  // 创建正在热映模块
  var module=angular.module('moviecat.movie_list',[
    'ngRoute',
    'moviecat.services.http',
    ])
  module.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/:crate/:page',{
      templateUrl:'movie_list/view.html',
      controller:'MoveListController'
    })
  }]);
  module.controller('MoveListController',[
    '$scope',
    '$route',
    '$routeParams',
    'HttpService',
    function($scope,$route,$routeParams,HttpService){
      // 控制器 分为两步 一，设计暴露的数据，设计暴露的行为
      var count = 10;
      var page = parseInt($routeParams.page);
      var start = (page - 1)* count;
      $scope.crate = $routeParams.crate;
      $scope.loding = true;
      $scope.subjects = [];
      $scope.totalCount = 0;
      $scope.totalPage = 0;
      $scope.countPage = page;
      $scope.title = '';
      HttpService.jsonp('https://api.douban.com/v2/movie/'+$scope.crate,
        {start: start,count:count,q:$routeParams.q},
        function(data){
        $scope.subjects = data.subjects;
        $scope.totalCount=data.total;
        $scope.title = data.title;
        $scope.totalPage = Math.ceil($scope.totalCount/count);
        $scope.loding = false;
        $scope.$apply();

      $scope.go = function(page){
        if(page >=1 && page <= $scope.totalPage){
          $route.updateParams({page:page});
        }
      } 

    })
    
  }])
})(angular)