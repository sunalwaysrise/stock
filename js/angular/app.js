var t=angular.module('stock',['ngRoute','ngSanitize','infinite-scroll','services','directives']);
var stock={
	tpl:{
		index:'/html/tpl/index/',
		user:'/html/tpl/user/'
	},
	data:{
		stock:'/',
		user:"/"
	}
};
t.config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider.when('/index',{
    templateUrl: stock.tpl.index+'index.html',
    controller: 'index'
  })
  .when('/index/:t',{
    templateUrl: stock.tpl.index+'index.html',
    controller: 'index'
  })
  .when('/stock',{
    templateUrl: stock.tpl.index+'stock.html',
    controller: 'stock'
  })
  .when('/stock/:t',{
    templateUrl: stock.tpl.index+'stock.html',
    controller: 'stock'
  })
  .when('/signIn',{
    templateUrl: stock.tpl.user+'signIn.html',
    controller: 'signIn'
  })
  .when('/signUp',{
    templateUrl: stock.tpl.user+'signUp.html',
    controller: 'signUp'
  })
  .when('/recharge',{
    templateUrl: stock.tpl.user+'recharge.html',
    controller: 'recharge'
  })
  .otherwise({
    redirectTo: '/index'
  });
}]);
t.controller('index',['$scope','$http','$routeParams','nav',
	function($scope,$http,$routeParams,nav){
    var t=$routeParams.t;
    if(!t){t='SH600570';}
		$scope.title='首页';
		$scope.left=nav.left;
		$scope.right=nav.right;
		$scope.up=nav.up;
		$scope.loading=true;/* 转场动画*/
		$scope.alert=function(x){/*alert*/
			$scope.openDialog=true;
			$scope.dialog={
				txt:'正文标题'+x,
				suretxt:'好的',
				cancaltxt:'取消',
				cancel:function(){
					$scope.openDialog=false;
				},
				sure:function(){
					$scope.openDialog=false;
				}
			};
		}
		$scope.showStock='hide';
		$scope.showK='show';
		$scope.change=function(x){
			if(x==1){
				$scope.showStock='show';
				$scope.showK='hide';
			}else{
				$scope.showStock='hide';
				$scope.showK='show';
			}
		}
		// $scope.loading=false;
	  M.socket=new WebSocket('ws://115.238.164.185:8090/websocket/quote?user_id=123');
		M.socket.onopen=function(event){
      M.socket.send('regist_quotes:'+t);/*发送一个初始化消息*/
      M.socket.onmessage=function(event){/*监听消息*/
      	var E;
      	if(typeof event.data=="string"){
      		E=eval("("+event.data+")");
      	}else{
      		E=event.data;
      	}
      	if(E.type=="pull"){
      		M.draw.w1=E.data;
      		M.draw.stock();
      	}else{
      		if(E.index!=-1){
	      		if(M.draw.w1.length<=E.index){
	      			M.draw.w1.push(String(E.price));
	      		}else{
      				M.draw.w1[E.index]=String(E.price);
	      		}
    				M.draw.stock();
      		}
      	}
      };
      M.socket.onclose=function(event){/*监听Socket的关闭*/
        console.log('链接终止',event);
      };
    };
    $http.get(stock.data.stock+'getH5DayK',{params:{"stockCode":t}}).success(function(data){
			$scope.loading=false;/*停止转场动画*/
      var d=data.content;
      d=eval("("+d+")");
      M.draw.w2=d;
			M.draw.k();
		});
	}
]).controller('stock',['$scope','$http','$routeParams','nav',
	function($scope,$http,$routeParams,nav){
    if(M.socket){M.socket.close();}
		$scope.title='股票操盘';
		$scope.left=nav.left;
		$scope.right=nav.right;
		$scope.up=nav.up;
		$scope.indexData={t:$routeParams.t,p:1};
		//$scope.loading=true;/*开启转场动画*/
		$scope.lists=[];
		$scope.end=false;
		$scope.getData=function(){
			if($scope.end){return false;}
			if($scope.lock){return false;}
			if(!$scope.indexData.t){
				$scope.indexData.t=0;
			}
			$scope.lock=true;/*锁定AJAX*/
			$scope.indexData._=new Date().getTime();
			$http.get(stock.data.stock+'index',{params:$scope.indexData}).success(function(data){
				$scope.loading=false;/*停止转场动画*/
				$scope.lock=false;/*解除AJAX锁定*/
				$scope.indexData.p++;
				if(data.list<10){
					$scope.end=true;/*该类别数据禁止再次请求*/
				}
				var t=$scope.lists;
				if(data.list){
					$scope.lists=t.concat(data.list);
				}
			});
		};
	}
]).controller('signIn',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
  if(M.socket){M.socket.close();}
	$scope.data={mobile:'',password:''};
	$scope.lock=false;
  $scope.signIn=function(){
  	if($scope.lock){
    	return false;
    }
    $scope.lock=true;
    if(!$scope.data.mobile){
    	alert('请输入正确的手机号');
    	return false;
    }
    if(!$scope.data.password){
    	alert('请输入密码');
    	return false;
    }
    $http.get(stock.data.user+'user/loginPost',{params:$scope.data}).success(function(data){
      $scope.lock=false;
      if(data.flag==1){
        alert('登录');
      }else{
        alert(data.message);
      }
    }).error(function(d){
    	$scope.lock=false;
    });
  }
}]).controller('signUp',['$scope','$interval','$http','$routeParams',function($scope,$interval,$http,$routeParams){
  if(M.socket){M.socket.close();}
	function updateTime(){
		$scope.count--;
	}
  function isPhone(i){
    var r = /^\+?[1-9][0-9]*$/;
    return (!r.test(i) || i.length!=11)?false:true;
  }
  function isPassword(i){
    return true;
  }
  $scope.sending=false;
	$scope.lock=false;
	$scope.sendMobile={};
  $scope.count=60;
  $scope.getVri=function(){
  	if($scope.lock){
    	return false;
    }
    if($scope.sending){
    	return false;
    }
    $scope.lock=true;
	  if(!isPhone($scope.data.mobile)){
	  	alert('请输入正确的手机号');
	  	return false;
	  }

  	$scope.sendMobile={mobile:$scope.data.mobile};
    $scope.sending=true;
    $http.get(stock.data.user+'register/sendMobile',{params:$scope.sendMobile}).success(function(data){
      $scope.lock=false;
      if(data.flag==1){
        var timer=$interval(function(){
          if($scope.count == 0){
            $interval.cancel(timer);
            $scope.count = 60;
            $scope.sending = false;
          }else{
            updateTime();
          }
        },1000);
      }else{
        alert(data.message);
        $scope.sending = false;
      }
    }).error(function(d){
    	$scope.lock=false;
    	$scope.sending=false;
    });
  }
  $scope.data={verifyCode:'',mobile:'',password:''};
  $scope.signUp=function(){
    if(!isPhone($scope.sendMobile.mobile)){
    	alert('请输入正确的手机号');
    	return false;
    }
    $scope.data.mobile=$scope.sendMobile.mobile;
    if(!$scope.data.verifyCode){
    	alert('请输入验证码');
    	return false;
    }
    if(!isPassword($scope.data.password)){
    	alert('请输入密码');
    	return false;
    }
    if($scope.lock){
    	return false;
    }
    $scope.lock=true;
    $http.get(stock.data.user+'register/registerByMobile',{params:$scope.data}).success(function(data){
      $scope.lock=false;
      if(data.flag==1){
        alert('注册成功');
      }else{
        alert(data.message);
      }
    }).error(function(d){
    	$scope.lock=false;
    });
  }	
}]);






