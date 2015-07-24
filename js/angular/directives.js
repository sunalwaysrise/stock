var directives = angular.module('directives',[]);
directives.directive('mydialog',function(){
	return {
		scope:{
			cancel:"&",
			sure:"&",
			title:"@",
			txt:"@",
			suretxt:"@",
			cancaltxt:"@"
		},
		restrict:'E',
		template:'<div class="dialog"><h1>{{title}}</h1><h2>{{txt}}</h2><div><a ng-click="cancel()">{{cancaltxt}}</a><a ng-click="sure()">{{suretxt}}</a></div></div>',
		replace:true
	}
}).directive('myentrusts',function(){
	return {
		scope:{
			close:"&",
			title:"@",
			stockname:"@",
			stockcode:"@",
			bs:"@",
			bst:"@",
			businessprice:"@",
			businesstime:"@",
			businessamount:"@",
			businessbalance:"@",
			transferfee:"@",
			businesstotal:"@",
			commission:"@",
			tax:"@"
		},
		restrict:'E',
		template:'<div class="entrustsdialog"><h1>{{title}}<i ng-click="close()">+</i></h1><div><b>{{stockname}}({{stockcode}})</b><code class="{{bs}}">{{bst}}</code><br/><span>成交均价：</span>{{businessprice}}元<br/><span>成交数量：</span>{{businessamount}}<br/><span>成交金额：</span>{{businessbalance}}元<br/><span>佣金：</span>{{commission}}元<br/><span>印花税：</span>{{tax}}元<br/><span>过户费：</span>{{transferfee}}元<br/><span>总金额：</span>{{businesstotal}}元<br/><span>成交时间：</span>{{businesstime|date:"yyyy-MM-dd HH:mm:ss"}}</div></div>',
		replace:true
	}
}).directive('myfinances',function(){
	return {
		scope:{
			cancel:"&",
			sure:"&",
			ordernumber:"@",
			created:"@",
			name:"@",
			endtime:"@",
			balance:"@",
			deposit:"@",
			adddeposit:"@",
			assetbalance:"@",
			keepriskratio:"@",
			closeriskratio:"@",
			suretext:"@"
		},
		restrict:'E',
		template:'<div class="myFinancesLock"><div class="myFinancesDialog"><h1>订单详情<i ng-click="cancel()">+</i></h1><div><span>实盘编号：</span>{{ordernumber}}<br/><span>申请时间：</span>{{created|date:"yyyy-MM-dd HH:mm:ss"}}<br/><span>订单类型：</span>{{name}}<br/><span>交易期限：</span>{{endtime|date:"yyyy-MM-dd HH:mm:ss"}}<br/><span>申请资金：</span>{{balance}}元<br/><span>冻结保证金：</span>{{deposit}}元<br/><span>补充保证金：</span>{{adddeposit}}元<br/><span>操盘资金：</span>{{assetbalance}}元<br/><span>警戒线：</span>{{keepriskratio}}元<br/><span>平仓线：</span>{{closeriskratio}}元</div><h3><a ng-click="sure()">{{suretext}}</a></h3><p>注：终止订单，管理费不予退还</p></div></div>',
		replace:true
	}
}).directive('loading',function(){
	return {
		restrict:'E',
		template:'<div id="loading"><div><a></a></div></div>',
		replace:true
	};
}).directive('textinput',function(){
	return {
		 restrict:'E',
		 replace:true,
		 scope:true,
		 template:function(elem,attr){
		 	return '<span><input type="text" maxlength="20" class="'+attr.dclass+'" placeholder="'+attr.dplaceholder+'" ng-model="'+attr.model+'"/><i>+</i></span>';
		 },
		 link:function(scope,element,attr){
 			 $(element).children('input').bind('keyup',function(){
  			 	if($(this).val()){
  			 		$(this).next().show();
  			 	}else{
  			 		$(this).next().hide();
  			 	}
  			 	scope.$apply(attr.ck);
 			 });
 			 $(element).children('i').bind('click',function(){
  			 	scope.$apply(attr.clear);
  			 	scope.$apply(attr.ck);
  				$(this).hide();	 	
 			 });
	 	}
	};
}).directive('mobileinput',function(){
	return {
		 restrict:'E',
		 replace:true,
		 template:function(elem,attr){
		 	return '<span><input type="tel" maxlength="11" class="'+attr.dclass+'" placeholder="'+attr.dplaceholder+'" ng-model="'+attr.model+'"/><i>+</i></span>';
		 },
		 link:function(scope,element,attr){
 			 $(element).children('input').bind('keyup',function(){
 			 		var t=$(this).val();
  			 	if(t){
  			 		$(this).next().show();
  			 		if(t.length>11){
  			 			$(this).val(t.substr(0,11));
  			 		}
  			 	}else{
  			 		$(this).next().hide();
  			 	}
  			 	scope.$apply(attr.ck);
 			 });
 			 $(element).children('i').bind('click',function(){
  			 	scope.$apply(attr.clear);
  			 	scope.$apply(attr.ck);
  				$(this).hide();	 	
 			 });
	 	}
	};
}).directive('numberinput',function(){
	return {
		 restrict:'E',
		 replace:true,
		 template:function(elem,attr){
		 	return '<span><input type="tel" maxlength="'+attr.dlen+'" class="'+attr.dclass+'" placeholder="'+attr.dplaceholder+'" ng-model="'+attr.model+'"/><i>+</i></span>';
		 },
		 link:function(scope,element,attr){
 			 $(element).children('input').bind('keyup',function(){
 			 		var t=$(this).val();
  			 	if(t){
  			 		$(this).next().show();
  			 	}else{
  			 		$(this).next().hide();
  			 	}
  			 	scope.$apply(attr.ck);
 			 });
 			 $(element).children('i').bind('click',function(){
  			 	scope.$apply(attr.clear);
  			 	scope.$apply(attr.ck);
  				$(this).hide();	 	
 			 });
	 	}
	};
}).directive('passwordinput',function(){
	return {
		 restrict:'E',
		 replace:true,
		 template:function(elem,attr){
		 	return '<span><input type="password" maxlength="20" class="'+attr.dclass+'" placeholder="'+attr.dplaceholder+'" ng-model="'+attr.model+'"/><i>+</i></span>';
		 },
		 link:function(scope,element,attr){
			$(element).children('input').bind('keyup',function(){
				if($(this).val()){
					$(this).next().show();
				}else{
			 		$(this).next().hide();
			 	}
				scope.$apply(attr.ck);
			});
			$(element).children('i').bind('click',function(){
				scope.$apply(attr.clear);
				scope.$apply(attr.ck);
				$(this).hide();	 	
			});
	 	}
	};
});