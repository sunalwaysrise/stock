var directives = angular.module('directives',[]);
directives.directive('mydialog',function(){
	return {
		scope:{
			cancel:"&",
			sure:"&",
			txt:"@",
			suretxt:"@",
			cancaltxt:"@"
		},
		restrict:'E',
		template:'<div class="dialog"><h2>{{txt}}</h2><div><a ng-click="cancel()">{{cancaltxt}}</a><a ng-click="sure()">{{suretxt}}</a></div></div>',
		replace:true
	}
}).directive('loading',function(){
	return {
		restrict:'E',
		template:'<div id="loading"><div><a></a></div></div>',
		replace:true
	};
});