'use strict';

(function(angular){
	var http = angular.module('moviecat.services.http',[]);
	http.service('HttpService',['$document','$window',function($document,$window){
		this.jsonp = this.jsonp = function(url,data,callback){
		// 0.挂在回调函数
		var callBackName = 'my_json_callBack'+Math.random().toString().replace('.','');
		$window[callBackName] = callback;
		// 1.将data转换为URL字符串的形式
		var queryString = '?';
		for(var key in data){
			queryString+=key+'='+data[key]+'&';
		}
		// 2.处理url中的回调参数
		queryString += 'callback='+callBackName;
		// 3.创建一个script标签
		var scriptElem = $document[0].createElement('script');
		scriptElem.src = url+queryString;
		// 注意：此时还不能将其append到页面上
		// 4.将script标签放到页面上
		$document[0].body.appendChild(scriptElem);
	}
	}])
})(angular)

// 自己手写一个跨域组件
// (function(window){
// 	'use strict';
// 	var jsonp = function(url,data,callback){
// 		// 0.挂在回调函数
// 		var callBackName = 'my_json_callBack'+Math.random().toString().replace('.','');
// 		window[callBackName] = callback;
// 		// 1.将data转换为URL字符串的形式
// 		var queryString = '?';
// 		for(var key in data){
// 			queryString+=key+=data[key]+'&';
// 		}
// 		// 2.处理url中的回调参数
// 		queryString += 'callback='+callBackName;
// 		// 3.创建一个script标签
// 		var scriptElem = document.createElement('script');
// 		scriptElem.src = url+queryString;
// 		// 注意：此时还不能将其append到页面上
// 		// 4.将script标签放到页面上
// 		document.body.appendChild(scriptElem);
// 	}
// 	window.jsonp = jsonp
// })(window);

// // 调用方法
// (function(document){
// 	jsonp('https://api.douban.com/v2/movie/in_theaters',
// 		{count:10},
// 		function(data){
// 			console.log(data)
// 		}
// 	)
// })(document)