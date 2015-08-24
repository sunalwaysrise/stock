var indexAutoK;
var t=angular.module('stock',['ngRoute','ngSanitize','ngTouch','infinite-scroll','services','directives','filters']);
var stock={
  tpl:{index:'/html/tpl/index/',user:'/html/tpl/user/',guide:'/html/tpl/guide/'},
  data:{stock:"/",user:"/",pay:"http://pay.ycaopan.com/",base:"/"},
  res:'http://res2.cp2y.com/h5/stock/images',
  v:"20150529"
},V={"version":"1.0","requestType":25};
t.config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider.when('/index',{
    templateUrl: stock.tpl.index+'index.html?v='+stock.v,controller:'index'
  }).when('/investment',{
    templateUrl: stock.tpl.index+'investment.html?v='+stock.v,controller:'investment'
  }).when('/investmentDetail/:t',{
    templateUrl: stock.tpl.index+'investmentDetail.html?v='+stock.v,controller:'investmentDetail'
  }).when('/guide',{
    templateUrl: stock.tpl.index+'guide.html?v='+stock.v,controller:'guide'
  }).when('/guide/:p1',{
    templateUrl: stock.tpl.index+'guide.html?v='+stock.v,controller:'guide'
  }).when('/guidetail/:p1',{
    templateUrl: stock.tpl.index+'guidetail.html?v='+stock.v,controller:'guidetail'
  }).when('/exchange',{
    templateUrl: stock.tpl.index+'exchange.html?v='+stock.v,controller:'exchange'
  }).when('/self',{
    templateUrl: stock.tpl.index+'self.html?v='+stock.v,controller:'self'
  }).when('/search',{
    templateUrl: stock.tpl.index+'search.html?v='+stock.v,controller: 'search'
  }).when('/t1',{
    templateUrl: stock.tpl.index+'t1.html?v='+stock.v,controller: 't1'
  }).when('/t1/:t',{
    templateUrl: stock.tpl.index+'t1.html?v='+stock.v,controller: 't1'
  }).when('/rula',{
    templateUrl: stock.tpl.index+'rula.html?v='+stock.v,controller: 'rula'
  }).when('/rula1',{
    templateUrl: stock.tpl.index+'rula1.html?v='+stock.v,controller: 'rula'
  }).when('/rulad',{
    templateUrl: stock.tpl.index+'rulad.html?v='+stock.v,controller: 'rula'
  }).when('/stock',{
    templateUrl: stock.tpl.index+'stock.html?v='+stock.v,controller: 'stock'
  }).when('/stock/:t/:t2/:t3',{
    templateUrl: stock.tpl.index+'stock.html?v='+stock.v,controller: 'stock'
  }).when('/stock/:t/:t2/:t3/:t4',{//t股票代码,t2股票名称,t3买卖标示,t4配资ID
    templateUrl: stock.tpl.index+'stock.html?v='+stock.v,controller: 'stock'
  }).when('/stock2/:t/:t2',{
    templateUrl: stock.tpl.index+'stock2.html?v='+stock.v,controller: 'stock2'
  }).when('/signIn',{
    templateUrl: stock.tpl.user+'signIn.html?v='+stock.v,controller: 'signIn'
  }).when('/signUp',{
    templateUrl: stock.tpl.user+'signUp.html?v='+stock.v,controller: 'signUp'
  }).when('/password',{
    templateUrl: stock.tpl.user+'password.html?v='+stock.v,controller: 'password'
  }).when('/recharge',{
    templateUrl: stock.tpl.user+'recharge.html?v='+stock.v,controller: 'recharge'
  }).when('/rechargesuccess',{
    templateUrl: stock.tpl.user+'rechargesuccess.html?v='+stock.v,controller: 'rechargeSuccess'
  }).when('/home',{
    templateUrl: stock.tpl.user+'home.html?v='+stock.v,controller:'home'
  }).when('/info',{
    templateUrl: stock.tpl.user+'info.html?v='+stock.v,controller:'info'
  }).when('/infoUsername',{
    templateUrl: stock.tpl.user+'infoUsername.html?v='+stock.v,controller:'infoUsername'
  }).when('/infoMobile',{
    templateUrl: stock.tpl.user+'infoMobile.html?v='+stock.v,controller:'infoMobile'
  }).when('/infoVerify',{
    templateUrl: stock.tpl.user+'infoVerify.html?v='+stock.v,controller:'infoVerify'
  }).when('/infoBank',{
    template:"<loading ng-if='loading'></loading>",controller:'infoBank'
  }).when('/infoBankBind',{
    templateUrl: stock.tpl.user+'infoBankBind.html?v='+stock.v,controller:'infoBankBind'
  }).when('/infoBankAdd',{
    templateUrl: stock.tpl.user+'infoBankAdd.html?v='+stock.v,controller:'infoBankAdd'
  }).when('/infoBankList',{
    templateUrl: stock.tpl.user+'infoBankList.html?v='+stock.v,controller:'infoBankList'
  }).when('/infoBankDetail/:p1/:p2/:p3/:p4',{
    templateUrl: stock.tpl.user+'infoBankDetail.html?v='+stock.v,controller:'infoBankDetail'
  }).when('/infoPassword',{
    templateUrl: stock.tpl.user+'infoPassword.html?v='+stock.v,controller:'infoPassword'
  }).when('/message',{
    templateUrl: stock.tpl.user+'message.html?v='+stock.v,controller:'message'
  }).when('/messageDetail/:p1/:p2',{
    templateUrl: stock.tpl.user+'messageDetail.html?v='+stock.v,controller:'messageDetail'
  }).when('/getMessageDetail/:p1/:p2/:p3',{
    templateUrl: stock.tpl.user+'getMessageDetail.html?v='+stock.v,controller:'getMessageDetail'
  }).when('/balance',{
    templateUrl: stock.tpl.user+'balance.html?v='+stock.v,controller:'balance'
  }).when('/withdraw',{
    templateUrl: stock.tpl.user+'withdraw.html?v='+stock.v,controller:'withdraw'
  }).when('/bonus',{
    templateUrl: stock.tpl.user+'bonus.html?v='+stock.v,controller:'bonus'
  }).when('/details',{
    templateUrl: stock.tpl.user+'details.html?v='+stock.v,controller:'details'
  }).when('/details/:t',{
    templateUrl: stock.tpl.user+'details.html?v='+stock.v,controller:'details'
  }).when('/detail/:t/:t2',{
    templateUrl: stock.tpl.user+'detail.html?v='+stock.v,controller:'detail'
  }).when('/history',{
    templateUrl: stock.tpl.user+'history.html?v='+stock.v,controller:'history'
  }).when('/history/:p1',{
    templateUrl: stock.tpl.user+'history.html?v='+stock.v,controller:'history'
  }).when('/historyDetail/:p1/:p2',{
    templateUrl: stock.tpl.user+'historyDetail.html?v='+stock.v,controller:'historyDetail'
  }).when('/myFinances',{
    templateUrl: stock.tpl.user+'myFinances.html?v='+stock.v,controller:'myFinances'
  }).when('/myFinance/:p1',{
    templateUrl: stock.tpl.user+'myFinance.html?v='+stock.v,controller:'myFinance'
  }).when('/buy/:p1',{
    templateUrl: stock.tpl.user+'buy.html?v='+stock.v,controller:'buy'
  }).when('/broadcast',{
    templateUrl: stock.tpl.user+'broadcast.html?v='+stock.v,controller:'broadcast'
  }).when('/more',{
    templateUrl: stock.tpl.index+'more.html?v='+stock.v,controller:'more'
  }).when('/aboutus',{
    templateUrl: stock.tpl.index+'aboutus.html?v='+stock.v,controller:'aboutus'
  }).when('/feedback',{
    templateUrl: stock.tpl.index+'feedback.html?v='+stock.v,controller:'feedback'
  }).when('/summary/:p1/:p2',{
    templateUrl: stock.tpl.index+'summary.html?v='+stock.v,controller:'summary'
  }).when('/news',{
    templateUrl: stock.tpl.index+'news.html?v='+stock.v,controller:'news'
  }).when('/news/:p1/:p2',{
    templateUrl: stock.tpl.index+'news.html?v='+stock.v,controller:'news'
  }).when('/newsdetail/:p1/:p2/:p3',{
    templateUrl: stock.tpl.index+'newsdetail.html?v='+stock.v,controller:'newsdetail'
  }).when('/notice',{
    templateUrl: stock.tpl.index+'notice.html?v='+stock.v,controller:'notice'
  }).when('/notice/:p1',{
    templateUrl: stock.tpl.index+'notice.html?v='+stock.v,controller:'notice'
  }).when('/noticedetail/:p1/:p2',{
    templateUrl: stock.tpl.index+'newsdetail.html?v='+stock.v,controller:'noticedetail'
  }).when('/event',{
    templateUrl: stock.tpl.index+'event.html?v='+stock.v,controller:'event'
  }).otherwise({
    redirectTo: '/index'
  });
}]);
t.controller('stock',['$scope','$rootScope','$http','$routeParams','$timeout','nav','fave',function($scope,$rootScope,$http,$routeParams,$timeout,nav,fave){
  var t=$routeParams.t,tt=$routeParams.t2,ttt=$routeParams.t3,tuserFinanceId=$routeParams.t4;//ttt=1买入,2卖出
  $rootScope.bodyBg="black";
  clearTimeout(window.indexAutoK);
  var t1=t.substr(0,2),t2=t.substr(2,8);
  t1=t1=='SH'?1:2;
  $scope.title=tt;
  $scope.subtitle=t;
  $scope.left=nav.left;
  $scope.right=nav.right;
  $scope.up=nav.up;
  $scope.d={
    totalBalance:0,
    sellNumber:0,//买入股份
    buyNumber:0,//买入股份
    n1:0,//实盘可用金额
    n2:0,//可卖股数
    n3:0,//可买股数
    n4:0//占操盘总资金
  };
  $scope.myFinanceIndex=0;
  $scope.myFinanceVosLen=0;
  $scope.wt=false;
  $scope.inst_plus=function(i){//切换配资方案
    $scope.myFinanceIndex=i;
    setMyFinance();
  }
  $scope.setWt=function(){$scope.wt=true;}
  $scope.setSj=function(){$scope.wt=false;}
  function load(){
    if(ttt==1){//买入
      if(tuserFinanceId){//来自订单
        $scope.hasLogin=true;
        getMyFinanceDetailForBuy(tuserFinanceId);
      }else{//列出所有的配资方案
        var params={requestType: V.requestType,version: V.version,status:1};
        $http.get(stock.data.user+'user/core/getMyFinances',{params:params}).success(function(d){
          if(d.flag==-1){
            $scope.hasLogin=false;
          }else{
            $scope.hasLogin=true;
            $scope.myFinanceVos= d.myFinanceVos;
            $scope.myFinanceVosLen=d.myFinanceVos.length;
            if(d.myFinanceVos.length==0){
              $scope.hasLogin=false;
              $scope.noFinance=true;//未配资
            }else{
              $scope.showMyFinance=true;
              setMyFinance();
            }
          }
        });
      }
    }else if(ttt==2){//来自订单
      getMyFinanceDetailForBuy(tuserFinanceId);
    }
  }
  function setMyFinance(){//开始计算可买股票信息
    $("#myFinanceVos li").removeClass('on');
    if(!$scope.myFinanceIndex){
      $scope.myFinanceIndex=0;
    }
    var d=$scope.myFinanceVos[$scope.myFinanceIndex],numprice;
    $scope.d.buyNumber=0;//买入股份
    $scope.d.n1=0;//实盘可用金额
    $scope.d.n2=0;//可卖股数
    $scope.d.n3=0;//可买股数
    $scope.d.n4=0;//占操盘总资金
    getMyFinanceDetailForBuy(d.id);//计算可买股数
    setTimeout(function(){$("#myFinanceVos li").eq($scope.myFinanceIndex).addClass('on');},100);
  }
  function getMyFinanceDetailForBuy(i){//从后台获取得到总资产，然后计算可买股数
    $scope.loading=true;
    var p={requestType:V.requestType,version:V.version,userFinanceId:i,stockCode:t2,exchangeType:t1};
    $http.get(stock.data.user+'user/core/getMyFinanceDetailForBuy',{params:p}).success(function(d){
      $scope.loading=false;
      if(d.flag==1){
        $scope.d.n2=d.financeVo.enableAmount;
        $scope.d.s1=(M.draw.lastPrice*d.financeVo.enableAmount).toFixed(2);
        var D=d.financeVo;
        $scope.d.totalBalance=D.assetBalance;
        $scope.d.endtime=D.endTime;
        if(D.balance<D.limitBalance){
          $scope.d.n1=D.enableBalance;
        }else{
          var n1;
          n1=D.assetBalance*D.riskCtrlModel-D.currentStockValue-D.entrustBuyBalance;
          if(D.enableBalance>n1){
            $scope.d.n1=n1;
          }else{
            $scope.d.n1=D.enableBalance
          }
        }
        calc();
      }
    });
  }
  function calc(){
    var n3;
    if($scope.wt){
      n3=$scope.d.n1/$scope.numprice;
    }else{
      n3=$scope.d.n1/M.draw.lastPrice;
    }
    n3=Math.floor(n3/100);
    $scope.d.n3=n3*100;
    if($scope.d.totalBalance==0){
      $scope.d.n4=0;
    }else{
      $scope.d.n4=($scope.d.buyNumber*M.draw.lastPrice/$scope.d.totalBalance*100).toFixed(2);
    }
  }
  $scope.d.s2=0;
  function calc2(){
    if($scope.d.n2==0){
      $scope.d.s2=0;
    }else{
      $scope.d.s2=($scope.d.sellNumber/$scope.d.n2*100).toFixed(2);
    }
  }
  $scope.back=function(){
    history.go(-1);
  }
  $scope.inst2=function(){
    if($scope.numprice-0.01>M.draw.closePrice*0.9){
      var c=$scope.numprice-0.01;
      c=c.toFixed(2);
      $scope.numprice=Number(c);
      calc();
    }
  }
  $scope.plus2=function(){
    if($scope.numprice+0.01<M.draw.closePrice*1.1){
      var c=$scope.numprice+0.01;
      c=c.toFixed(2);
      $scope.numprice=Number(c);
      calc();
    }
  }
  $scope.limit2=function(){
    if($scope.numprice<M.draw.closePrice*0.9){
      $scope.numprice=(M.draw.closePrice*0.9).toFixed(2);
    }else if($scope.numprice>M.draw.closePrice*1.1){
      $scope.numprice=(M.draw.closePrice*1.1).toFixed(2);
    }
    $scope.numprice=Number($scope.numprice);
    calc();
  }
  $scope.checkBuyNumber=function(){
    if(isNaN($scope.d.buyNumber)){
      $scope.d.buyNumber=$scope.d.n3;
    }else if($scope.d.buyNumber>$scope.d.n3){
      $scope.d.buyNumber=$scope.d.n3;
    }
    calc();
  }
  $scope.checkSellNumber=function(){
    if(isNaN($scope.d.sellNumber)){
      $scope.d.sellNumber=$scope.d.n2;
    }else if($scope.d.sellNumber>$scope.d.n2){
      $scope.d.sellNumber=$scope.d.n2;
    }
    calc2();
  }
  if(ttt==1){//默认买
    $scope.isBuy=true;
  }else{//默认卖
    $scope.isBuy=false;
  }
  $scope.toggleBuy=function(){
    $scope.isBuy=!$scope.isBuy;
    calc();
  }
  $scope.bb={};
  $scope.buy=function(){
    if($scope.d.n3==0){
      return alert('可买股数为0');
    }
    if($scope.bb.lock){return false;}
    if($scope.d.buyNumber<100){
      return alert('必须是100的倍数');
    }
    $scope.bb.lock=true;
    var t3;
    if($scope.wt){
      t3=$scope.numprice;
    }else{
      t3=M.draw.lastPrice;
    }
    if(confirm('确认买入'+$scope.title+$scope.d.buyNumber+'股?')){
      //判断来源
      var userFinanceId;
      if(tuserFinanceId){
        userFinanceId=tuserFinanceId;
      }else if($scope.myFinanceVos){
        userFinanceId=$scope.myFinanceVos[$scope.myFinanceIndex].id
      }else{
        location.hash="#/signIn";
      }
      var params={requestType:V.requestType,version:V.version,
        userFinanceId: userFinanceId,
        exchangeType:t1,
        stockCode:t2,
        entrustAmount:$scope.d.buyNumber
      };
      if($scope.wt){
        params.entrustPrice=t3;
      }
      $http.get(stock.data.user+'user/core/doUserEntrustBuy',{params:params}).success(function(d){
        $scope.bb.lock=false;
        alert(d.message);
        if(d.flag==-1){
          location.hash="#/signIn";
        }else if(d.flag==1){
          location.hash="#/myFinance/"+params.userFinanceId;
        }
      });
    }else{
      $scope.bb.lock=false;
    }
  }
  $scope.sell=function(){
    if($scope.d.n2==0){
      return alert('可卖股数为0');
    }
    if($scope.bb.lock){return false;}
    if($scope.d.sellNumber<100){
      return alert('必须是100的倍数');
    }
    $scope.bb.lock=true;
    var t3;
    if($scope.wt){
      t3=$scope.numprice;
    }else{
      t3=M.draw.lastPrice;
    }
    var params={requestType:V.requestType,version:V.version,
      exchangeType:t1,
      stockCode:t2,
      entrustPrice:t3,
      entrustAmount:$scope.d.sellNumber
    };
    if(tuserFinanceId){
      params.userFinanceId=tuserFinanceId;
    }else if($scope.myFinanceVos){
      params.userFinanceId=$scope.myFinanceVos[$scope.myFinanceIndex].id;
    }else{
      return alert('该用户没有配资金');
    }
    if(confirm('确认卖出'+$scope.title+$scope.d.sellNumber+'股?')){
      $http.get(stock.data.user+'user/core/doUserEntrustSell',{params:params}).success(function(d){
        $scope.bb.lock=false;
        alert(d.message);
        if(d.flag==1){
          location.hash="#/myFinance/"+params.userFinanceId;
        }
      });
    }else{
      $scope.bb.lock=false;
    }
  }
  // 核心部分代码结束
  $scope.showStock='show';
  $scope.showK='hide';
  $scope.change=function(x){
    if(x==1){
      $scope.showStock='show';
      $scope.showK='hide';
    }else{
      $scope.showStock='hide';
      $scope.showK='show';
    }
  }
  $scope.loading=true;
  $scope.loaded=false;
  var wsAdd;
  if(__test){
    wsAdd='ws://192.168.1.246:8090/websocket/quote?user_id=123';
  }else{
    wsAdd='ws://quote.ycaopan.com/websocket/quote?user_id=123';
  }
  M.socket=new WebSocket(wsAdd);
  M.socket.onopen=function(event){
    M.socket.send('regist_quotes:'+t);/*发送一个初始化消息*/
    M.socket.onmessage=function(event){/*监听消息*/
      $scope.loading=false;
      var E;
      if(typeof event.data=="string"){
        E=eval("("+event.data+")");
      }else{
        E=event.data;
      }
      if(E.type=="pull"){//首次
        M.draw.isSuspense=E.isSuspense;
        M.draw.jk=E.quote.openPrice;
        M.draw.zg=E.quote.highPrice;
        M.draw.zs=E.quote.closePrice;
        M.draw.zd=E.quote.lowPrice;
        M.draw.w1= E.data;
        M.draw.wave = E.quote.wave;
        M.draw.waveRatio = E.quote.waveRatio;
        M.draw.closePrice = Number(E.lastClose);
        M.draw.lastPrice=E.quote.lastPrice;
        M.draw.quote= E.quote;
        M.draw.stock();
        $scope.minPrice=M.draw.zs*0.9;
        $scope.maxPrice=M.draw.zs*1.1;
        $scope.numprice=E.quote.lastPrice;
      }else{//推送
        if(E.index!=-1){
          var businessAmount=E.businessAmount,ii=0;lenn=M.draw.w1.length,sum=0,t;
          for(ii;ii<lenn;ii++){
            sum+=Number(M.draw.w1[ii].split(',')[2]);
          }
          if(M.draw.w1.length<=E.index){
            t=E.lastPrice+','+null+','+ (businessAmount-sum)+','+ E.businessBalance;
            t=E.lastPrice+','+null+','+null+','+ null;
            M.draw.w1.push(t);
          }else{
            M.draw.w1[E.index]=E.lastPrice+','+null+','+null+','+ null;
          }
          M.draw.quote=E;
          M.draw.lastPrice=E.lastPrice;
          M.draw.stock();
        }
        M.draw.isSuspense=E.suspense;
        M.draw.jk=E.openPrice;
        M.draw.zg=E.highPrice;
        M.draw.zs=E.closePrice;
        M.draw.zd=E.lowPrice;

        M.draw.wave = E.wave;
        M.draw.waveRatio = E.waveRatio;
      }
      //分时图加载完毕之后再加在其他数据
      if(!$scope.loaded){
        load();
      }
      $scope.loaded=true;
    };
    M.socket.onclose=function(event){/*监听Socket的关闭*/
      console.log('链接终止',event);
    };
  };
  var DD=localStorage.getItem('k'),D={},tf=false;
  if(DD!=null){D=eval("("+DD+")");}
  if(D[t]){
    if(D[t].time && D[t].data){
      var d=new Date(),d1=d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
      var e=new Date(D[t].time),e1=e.getFullYear()+'-'+e.getMonth()+'-'+e.getDate();
      if(d1==e1){tf=true;}
    }
  }
  if(tf){
    M.draw.w2=D[t].data;
    M.draw.k();
  }else{
    $http.jsonp('http://quote.ycaopan.com/line/jsonp/daykline?stockCode='+t+'&callback=M.draw.getH5DayK');
  }
  $scope.fave=false;
  var i=0,D=fave.get();
  for(i;i<D.length;i++){
    if(D[i].exchangeType==t1 && D[i].stockCode == t2){
      $scope.fave=true;
      break;
    }
  }
  $scope.addFave=function(i){
    fave.add(t1,t2);
    $scope.fave=true;
  }
  $scope.delFave=function(i){
    fave.remove(t1,t2);
    $scope.fave=false;
  }
  $scope.detail=function(){
    $scope.openMyFinances=true;
    var D=$scope.myFinanceVos[$scope.myFinanceIndex],
    orderNumber=D.orderNumber,created=D.createTime,name=D.name,endTime=D.endTime,balance=D.balance,deposit=D.deposit,addDeposit=D.addDeposit,keepRiskRatio=D.keepRiskRatio,closeRiskRatio=D.closeRiskRatio,tradersBalance=D.tradersBalance;
    $scope.userFinanceId=D.id;
    if(D.status==(1||2)){
      suretext='终止订单';
    }else if(D.status==3){
      suretext='订单终止清算中';
    }else if(D.status==4){
      suretext='到期终止清算中';
    }else if(D.status==5){
      suretext='手动结束清算中';
    }
    $scope.dialog={
      orderNumber:orderNumber,
      created:created,
      name:name,
      endTime:endTime,
      balance:balance,
      deposit:deposit-addDeposit,
      adddeposit:addDeposit,
      tradersbalance:tradersBalance,
      keepRiskRatio:keepRiskRatio,
      closeRiskRatio:closeRiskRatio,
      suretext:suretext,
      cancel:function(){
        $scope.openMyFinances=false;
      },
      sure:function(){

        if( D.status==(1||2) ){
          $scope.openMyFinances=false;
          $scope.openDialog=true;
          $scope.dialog={
            title:"订单终止",
            txt:'确认终止订单'+($scope.myFinanceIndex+1)+'么',
            suretxt:'确认',
            cancaltxt:'取消',
            cancel:function(){
              $scope.openDialog=false;
            },
            sure:function(){
              $scope.shutDown();
              $scope.openDialog=false;
            }
          }
        }


        
      }
    }
  }
  $scope.shutDown=function(){
    var p={userFinanceId:$scope.userFinanceId,requestType:V.requestType,version:V.version};
    $http.get(stock.data.base+'user/core/shutDownMyFinance',{params:p}).success(function(d){
      alert(d.message);
      if(d.flag==1){
        location.reload();
      }
    });
  }
}]).controller('stock2',['$scope','$rootScope','$http','$routeParams','$timeout','nav','fave',function($scope,$rootScope,$http,$routeParams,$timeout,nav,fave){
  var t=$routeParams.t,tt=$routeParams.t2;
  $rootScope.bodyBg="black";
  clearTimeout(window.indexAutoK);
  $scope.title=tt;
  $scope.subtitle=t;
  $scope.showStock='show';
  $scope.showK='hide';
  $scope.change=function(x){
    if(x==1){
      $scope.showStock='show';
      $scope.showK='hide';
    }else{
      $scope.showStock='hide';
      $scope.showK='show';
    }
  }
  var wsAdd;
  if(__test){
    wsAdd='ws://192.168.1.246:8090/websocket/quote?user_id=123';
  }else{
    wsAdd='ws://quote.ycaopan.com/websocket/quote?user_id=123';
  }
  M.socket=new WebSocket(wsAdd);
  M.socket.onopen=function(event){
    M.socket.send('regist_quotes:'+t);/*发送一个初始化消息*/
    M.socket.onmessage=function(event){/*监听消息*/
      var E;
      if(typeof event.data=="string"){
        E=eval("("+event.data+")");
      }else{
        E=event.data;
      }
      if(E.type=="pull"){//首次
        M.draw.w1= E.data;
        M.draw.wave = E.quote.wave;
        M.draw.waveRatio = E.quote.waveRatio;
        M.draw.closePrice = Number(E.lastClose);
        M.draw.openPrice = Number(E.openPrice);
        M.draw.lastPrice=E.quote.lastPrice;
        M.draw.quote= E.quote;
        M.draw.stock2();
        $scope.numprice=E.quote.lastPrice;
      }else{//推送
        if(E.index!=-1){
          var businessAmount=E.businessAmount,ii=0;lenn=M.draw.w1.length,sum=0,t;
          for(ii;ii<lenn;ii++){
            sum+=Number(M.draw.w1[ii].split(',')[2]);
          }
          if(M.draw.w1.length<=E.index){
            t=E.lastPrice+','+null+','+null+','+ null;
            M.draw.w1.push(t);
          }else{
            M.draw.w1[E.index]=E.lastPrice+','+null+','+null+','+ null;
          }
          M.draw.quote=E;
          M.draw.lastPrice=E.lastPrice;
          M.draw.stock2();
        }
        M.draw.wave = E.wave;
        M.draw.waveRatio = E.waveRatio;
      }
    };
    M.socket.onclose=function(event){/*监听Socket的关闭*/
      console.log('链接终止',event);
    };
  };
  var DD=localStorage.getItem('k'),D={},tf=false;
  if(DD!=null){D=eval("("+DD+")");}
  if(D[t]){
    if(D[t].time && D[t].data){
      var d=new Date(),d1=d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
      var e=new Date(D[t].time),e1=e.getFullYear()+'-'+e.getMonth()+'-'+e.getDate();
      if(d1==e1){tf=true;}
    }
  }
  if(tf){
    M.draw.w2=D[t].data;
    M.draw.k();
  }else{
    $http.jsonp('http://quote.ycaopan.com/line/jsonp/daykline?stockCode='+t+'&callback=M.draw.getH5DayK');
  }
}]).controller('index',['$scope','$rootScope','$timeout','$http','$routeParams','nav',function($scope,$rootScope,$timeout,$http,$routeParams,nav){
  clearTimeout(window.indexAutoK);
  if(M.socket){M.socket.close();}
  $timeout.cancel($scope.auto);
  $scope.navIndex=true;
  $scope.title='首页';
  $scope.left=nav.left;
  $scope.right=nav.right;
  $scope.indexData={p:1};
  $rootScope.bodyBg="white";
  $scope.loading=true;
  $scope.end=false;
  $scope.banners=[];
  $scope.auto=null;
  $scope.appDownBtn=true;
  $scope.closeAppDown=function(){
    $scope.appDownBtn=false;
  }
  $http.get(stock.data.base+"app_index",{params:V}).success(function(data){
    if(typeof data =="string"){data=eval("("+data+")");}
    $scope.banners=data.banners;
    $scope.introduces=data.contentVos;
    scroll.n=data.banners.length;
    $scope.userTotalProfit=data.userTotalProfit;
    //$scope.$apply();//解决双向数据绑定的坑//不是问题，使用jquery 的ajax 则需要这个
    $scope.list=data.carProfitVos;
    setTimeout(function(){
      $('#banners p i').eq(0).addClass('cur');
    },300);
    window.indexAutoK=setInterval('scroll.right()',7000);
  }).error(function(){
    $("#banners").hide();
    $scope.loading=false;
  });
  var stockCodes=["SH000001","SZ399001","SZ399006"],p={version:V.version,requestType:V.requestType,stockCodes:stockCodes.join(',')};
  $http.get(stock.data.user+'getOptionalStockDetail',{params:p}).success(function(d){
    $scope.loading=false;
    $scope.selfNav=d.optionalStockVos;
  });
  $scope.stock2=function(i){
    var C=["SH000001","SZ399001","SZ399006"],D=$scope.selfNav[i];
    location.hash="#/stock2/"+C[i]+"/"+encodeURI(D.stockName);
  }
}]).controller('investment', ['$scope','$rootScope','$timeout','$http','$routeParams',function($scope,$rootScope,$timeout,$http,$routeParams){
  clearTimeout(window.indexAutoK);
  if(M.socket){M.socket.close();}
  $timeout.cancel($scope.auto);
  $http.get(stock.data.base+"getStockNewsReference",{params:V}).success(function(d){
    $scope.chanceStockSummaryVos=d.chanceStockSummaryVos;
    $scope.marketStockSummaryVos=d.marketStockSummaryVos;
    $scope.recommendStockSummaryVos=d.recommendStockSummaryVos;
  });
}]).controller('investmentDetail', ['$scope','$rootScope','$timeout','$http','$routeParams',function($scope,$rootScope,$timeout,$http,$routeParams){
  clearTimeout(window.indexAutoK);
  if(M.socket){M.socket.close();}
  $timeout.cancel($scope.auto);
  var t=$routeParams.t;
  $rootScope.bodyBg="white";
  var params={requestType:V.requestType,version:V.version,stockNewsId:t};
  $http.get(stock.data.base+"getStockNewsContent",{params:params}).success(function(d){
    $scope.d=d.newsContentVo;
  });
  $scope.back=function(){
    history.go(-1);
  }
}]).controller('guide', ['$scope','$rootScope','$timeout','$routeParams',function($scope,$rootScope,$timeout,$routeParams){
  clearTimeout(window.indexAutoK);
  if(M.socket){M.socket.close();}
  $timeout.cancel($scope.auto);
  $rootScope.bodyBg="white";
  var p1=$routeParams.p1;
  $scope.android=true;
  if(p1==1){
    $scope.android=false;
  }
}]).controller('guidetail', ['$scope','$rootScope','$timeout','$http','$routeParams',function($scope,$rootScope,$timeout,$http,$routeParams){
  clearTimeout(window.indexAutoK);
  if(M.socket){M.socket.close();}
  $timeout.cancel($scope.auto);
  $rootScope.bodyBg="white";
  var p1=$routeParams.p1+".html";
  $http.get(stock.tpl.guide+p1).success(function(d){
    $scope.content=d;
  });
}]).controller('exchange', ['$scope','$rootScope','$timeout','$http','$routeParams',function($scope,$rootScope,$timeout,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='black';
  clearTimeout(window.indexAutoK);
  $scope.navExchange=true;
  $scope.count=0;
  $scope.loading=true;
  $http.get(stock.data.base+'getOrdersBroadcast',{params:V}).success(function(d){
    $scope.loading=false;
    if(d.flag==1){
      $scope.d=d.ordersBroadcastVo;
      $scope.list=d.ordersBroadcastVo.totalProfitVos;
      window.indexAuto();
    }
  });
  window.indexAuto=function(){
    var d=$("#exchangeTop li").eq(0).clone();
    $("#exchangeTop li").eq(0).animate({"margin-top":"-40px"},500,function(){
      $(this).remove();
      $("#exchangeTop").append(d);
    });
    window.indexAutoK=setTimeout(function(){indexAuto()},3000);
  }
  var p={status:1,requestType:V.requestType,version:V.version};
  $http.get(stock.data.base+'user/core/getMyFinanceForOrder',{params:p}).success(function(d){
    if(d.flag==1){
      $scope.count=d.myFinanceVos.length;
    }
  });
}]).controller('myFinances', ['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='black';
  clearTimeout(window.indexAutoK);
  $scope.navExchange=true;
  $scope.count=0;
  $scope.lists=[];
  $scope.loading=true;
  function get(s){
    var p={status:s,requestType:V.requestType,version:V.version};
    $http.get(stock.data.base+'user/core/getMyFinanceForOrder',{params:p}).success(function(d){
      $scope.loading=false;
      if(d.flag==1){
        $scope.show=true;
        if(s==1){
          $scope.count=d.myFinanceVos.length;
        }
        $scope.lists=d.myFinanceVos;
      }else{
        location.hash="#/signIn";
      }
    });
  }
  get(1);
  $scope.shutDown=function(){
    var p={userFinanceId:$scope.userFinanceId,requestType:V.requestType,version:V.version};
    $http.get(stock.data.base+'user/core/shutDownMyFinance',{params:p}).success(function(d){
      alert(d.message);
      if(d.flag==1){
        location.reload();
      }
    });
  }
  $scope.showdetail=function(i){
    var D=$scope.lists[i];
    location.hash="#/myFinance/"+D.id;
  }
}]).controller('myFinance', ['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='black';
  clearTimeout(window.indexAutoK);
  var userFinanceId=$routeParams.p1,p={userFinanceId:userFinanceId,requestType:V.requestType,version:V.version};
  $scope.userFinanceId=userFinanceId;
  $scope.myFinanceCancels=0;
  $http.get(stock.data.base+'user/core/getMyFinanceOrderDetail',{params:p}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else if(d.flag==1){
      $scope.show=true;
      $scope.orderdetail=d.financeVo;
      $http.get(stock.data.base+"user/core/getMyPositions",{params:p}).success(function(d){
        $scope.getMyPositions=d.userPositionVos;
      });
      $http.get(stock.data.base+"user/core/getMyFinanceCancels",{params:p}).success(function(d){
        $scope.getMyFinanceCancels=d.userEntrustVos;
        $scope.myFinanceCancels=d.userEntrustVos.length;
      });
      $http.get(stock.data.base+"user/core/getMyEntrusts",{params:p}).success(function(d){
        $scope.getMyEntrusts=d.userEntrustVos;
      });
      $http.get(stock.data.base+"user/core/getMyFinanceBusiness",{params:p}).success(function(d){
        $scope.getMyFinanceBusiness=d.clearBusinessVos;
      });
    }else{}
  });
  $scope.n0=true;
  $scope.n1=false;
  $scope.n2=false;
  $scope.n3=false;
  $scope.setNav=function(x){
    $scope.n0=false;
    $scope.n1=false;
    $scope.n2=false;
    $scope.n3=false;
    $scope["n"+x]=true;
  }
  $scope.cancleUserEntrust=function(i){
    var D=$scope.getMyFinanceCancels[i],p={userFinanceId:$routeParams.p1,entrustId:D.id,requestType:V.requestType,version:V.version};
    $http.get(stock.data.base+'user/core/cancleUserEntrust',{params:p}).success(function(d){
      alert(d.message);
      if(d.flag==1){
        $http.get(stock.data.base+"user/core/getMyPositions",{params:p}).success(function(d){
          $scope.getMyPositions=d.userPositionVos;
        });
        $http.get(stock.data.base+"user/core/getMyFinanceCancels",{params:p}).success(function(d){
          $scope.getMyFinanceCancels=d.userEntrustVos;
          $scope.myFinanceCancels=d.userEntrustVos.length;
        });
        $http.get(stock.data.base+"user/core/getMyEntrusts",{params:p}).success(function(d){
          $scope.getMyEntrusts=d.userEntrustVos;
        });
        $http.get(stock.data.base+"user/core/getMyFinanceBusiness",{params:p}).success(function(d){
          $scope.getMyFinanceBusiness=d.clearBusinessVos;
        });
      }
    });
  }
  $scope.detail=function(){
    $scope.openMyFinances=true;
    var D=$scope.orderdetail,suretext,orderNumber=D.orderNumber,created=D.createTime,name=D.name,endTime=D.endTime,balance=D.balance,deposit=D.deposit,addDeposit=D.addDeposit,keepRiskRatio=D.keepRiskRatio,closeRiskRatio=D.closeRiskRatio,tradersBalance=D.tradersBalance;
    if(D.status==(1||2)){
      suretext='终止订单';
    }else if(D.status==3){
      suretext='订单终止清算中';
    }else if(D.status==4){
      suretext='到期终止清算中';
    }else if(D.status==5){
      suretext='手动结束清算中';
    }
    $scope.userFinanceId=D.id;
    $scope.dialog={
      orderNumber:orderNumber,
      created:created,
      name:name,
      endTime:endTime,
      balance:balance,
      deposit:deposit-addDeposit,
      adddeposit:addDeposit,
      tradersbalance:tradersBalance,
      keepRiskRatio:keepRiskRatio,
      closeRiskRatio:closeRiskRatio,
      suretext:suretext,
      cancel:function(){
        $scope.openMyFinances=false;
      },
      sure:function(){
        if( D.status==(1||2) ){
          $scope.openMyFinances=false;
          $scope.openDialog=true;
          $scope.dialog={
            title:"订单终止",
            txt:'确认终止订单么',
            suretxt:'确认',
            cancaltxt:'取消',
            cancel:function(){
              $scope.openDialog=false;
            },
            sure:function(){
              $scope.shutDown();
              $scope.openDialog=false;
            }
          }
        }
      }
    };
  }
  $scope.myEntrustsDetail=function(i){
    $scope.openMyEntrusts=true;
    var D=$scope.getMyFinanceBusiness[i];
    if(D.entrustBs==1){
      D.bs='red';
      D.bst="买";
    }else{
      D.bs='green';
      D.bst="卖";
    }
    $scope.dialog=D;
    $scope.dialog.title='成交详情';
    $scope.dialog.close=function(){
      $scope.openMyEntrusts=false;
    }
  }
  $scope.shutDown=function(){
    var p={userFinanceId:$scope.userFinanceId,requestType:V.requestType,version:V.version};
    $http.get(stock.data.base+'user/core/shutDownMyFinance',{params:p}).success(function(d){
      alert(d.message);
      if(d.flag==1){
        location.reload();
      }
    });
  }
  $scope.addDepositOpen=function(){
    if(1==2){
      alert('当前配资状态不允许追加保证金');
    }else{
      $scope.addDepositBox=true;
    }
  }
  $scope.addDepositClose=function(){
    $scope.addDepositBox=false;
  }
  $scope.m={balance:''};
  function loadOrderDetail(){
    $http.get(stock.data.base+'user/core/getMyFinanceOrderDetail',{params:p}).success(function(d){
      if(d.flag==1){
        $scope.orderdetail=d.financeVo;
      }
    });
  }
  $scope.doAddDeposit=function(){
    if(confirm('确认补充保证金')){
      var p={userFinanceId:$routeParams.p1,balance:$scope.m.balance,requestType:V.requestType,version:V.version};
      $http.get(stock.data.base+'user/core/doAddDeposit',{params:p}).success(function(d){
        alert(d.message);
        $scope.m.balance='';
        $scope.addDepositClose();
        loadOrderDetail();
      });
    }
  }
  $scope.refresh=function(){
    loadOrderDetail();
  }
}]).controller('buy', ['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='black';
  clearTimeout(window.indexAutoK);
  $scope.back=function(){
    history.go(-1);
  }
  $scope.userFinanceId=$routeParams.p1
  $scope.b=true;
  $scope.list=[];
  $scope.refresh=function(){
    $scope.b=true;
    getBusinessBroadcastMessage(); 
  }
  getBusinessBroadcastMessage();
  function getBusinessBroadcastMessage(){
    $scope.loading=true;
    $http.get(stock.data.base+"getBusinessBroadcastMessage",{params:V}).success(function(data){
      $scope.loading=false;
      if(data.flag==1){$scope.list=data.buinessBoBaoVos;}
    });
  }
  var data={version:V.version,requestType:V.requestType},zixungu=localStorage.getItem('zixungu');
  if(zixungu){
    zixungu=eval("("+zixungu+")");
    if(zixungu.md5Value){data.md5Value=zixungu.md5Value;}
  }
  $http.get(stock.data.user+'initStocks',{params:data}).success(function(data){
    var k=localStorage.getItem('zixungu');
    if(k){
      k=eval("("+k+")");
      if(data.md5Value!=k.md5Value){localStorage.setItem('zixungu',JSON.stringify(data));}
    }else{
      localStorage.setItem('zixungu',JSON.stringify(data));
    }
    var zixungu=localStorage.getItem('zixungu');
    zixungu=eval("("+zixungu+")");
    $scope.lists=zixungu.profileVos;
  });
  $scope.get=function(){
    $scope.gets();
    // throttle($scope.gets(),300,600);
  }
  function throttle(fn, delay, mustRunDelay){
    var timer = null;
    var t_start;
    return function(){
      var context = this, args = arguments, t_curr = +new Date();
      clearTimeout(timer);
      if (!t_start) {
        t_start = t_curr;
      }
      if (t_curr - t_start >= mustRunDelay) {
        fn.apply(context, args);
        t_start = t_curr;
      } else {
        timer = setTimeout(function() {
          fn.apply(context, args);
        }, delay);
      }
    }
  }
  $scope.gets=function(){
    $scope.b=false;
    $scope.list=[];
    if($scope.search){
      var k=$scope.search,tf=false;
      if(!isNaN(k)){
        if(String(k).length>3){
          tf=true;
        }
      }else{
        tf=true;
      }
      if(tf){
        var i=0,j=0,len=$scope.lists.length,v;
        for(i;i<len;i++){
          if(hasIn($scope.lists[i])){
            j++;
            v=$scope.lists[i];
            $scope.list.push(v);
            if(j>20){
              break;
            }
          }
        }
      }
    }else{
      $scope.refresh();
    }
  }
  function hasIn(i){
    var r=false;
    if( (i.stockCode.indexOf($scope.search)!=-1) ||(i.stockName.indexOf($scope.search)!=-1)||(i.stockPinyin.indexOf($scope.search)!=-1) ){
      r=true;
    }
    return r;
  }
}]).controller('broadcast', ['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='black';
  clearTimeout(window.indexAutoK);
  $scope.show=true;
  $http.get(stock.data.base+'getFinanceBroadcastMessage',{params:V}).success(function(d){
    $scope.lists=d.financeBoBaoVos;
  });
}]).controller('self', ['$scope','$rootScope','$http','$routeParams','fave',function($scope,$rootScope,$http,$routeParams,fave){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='black';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $http.get(stock.data.stock+'user/core/getCurrentUserAcount',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }
  });
  $scope.navFave=true;
  $scope.title='自选';
  $scope.fave=fave;
  var iD=fave.get();
  if( !iD || iD.length==0){
    $http.get(stock.data.stock+'user/core/getMyOptionalStock',{params:V}).success(function(d){
      $scope.iD=d.userOptionalStockVos;
      fave.set($scope.iD);
      init($scope.iD);
    });
  }else{
    init(iD);
  }
  function init(iD){
    var ij=0,iE='';
    stockCodes=["SH000001","SZ399001","SZ399006"];
    for(ij;ij<iD.length;ij++){
      iE="";
      if(iD[ij].exchangeType=="1"){
        iE="SH"+iD[ij].stockCode;
      }else{
        iE="SZ"+iD[ij].stockCode;
      }
      stockCodes.push(iE);
    }
    $scope.loading=true;
    var p={version:V.version,requestType:V.requestType,stockCodes:stockCodes.join(',')};
    $http.get(stock.data.user+'getOptionalStockDetail',{params:p}).success(function(d){
      $scope.loading=false;
      $scope.selfNav=[];
      $scope.selfNav.push(d.optionalStockVos[0]);
      $scope.selfNav.push(d.optionalStockVos[1]);
      $scope.selfNav.push(d.optionalStockVos[2]);
      d.optionalStockVos.splice(0,3);
      $scope.selfList=d.optionalStockVos;
    });
  }
  $scope.stock2=function(i){
    var C=["SH000001","SZ399001","SZ399006"],D=$scope.selfNav[i];
    location.hash="#/stock2/"+C[i]+"/"+encodeURI(D.stockName);
  }
}]).controller('search', ['$scope','$rootScope','$http','$routeParams','fave',function($scope,$rootScope,$http,$routeParams,fave){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='black';
  clearTimeout(window.indexAutoK);
  $scope.back=function(){
    history.back();
  }
  $scope.title='个股搜索';
  var data={version:V.version,requestType:V.requestType},zixungu=localStorage.getItem('zixungu');
  if(zixungu){
    zixungu=eval("("+zixungu+")");
    if(zixungu.md5Value){data.md5Value=zixungu.md5Value;}
  }
  $http.get(stock.data.user+'initStocks',{params:data}).success(function(data){
    var k=localStorage.getItem('zixungu');
    if(k){
      k=eval("("+k+")");
      if(data.md5Value!=k.md5Value){localStorage.setItem('zixungu',JSON.stringify(data));}
    }else{
      localStorage.setItem('zixungu',JSON.stringify(data));
    }
    setData();
  });
  function setData(){
    var zixungu=localStorage.getItem('zixungu');
    zixungu=eval("("+zixungu+")");
    $scope.lists=zixungu.profileVos;
  }
  $scope.get=function(){
    $scope.gets();
    // throttle($scope.gets(),500,600);
  }
  function throttle(fn, delay, mustRunDelay){
    var timer = null;
    var t_start;
    return function(){
      var context = this, args = arguments, t_curr = +new Date();
      clearTimeout(timer);
      if (!t_start) {
        t_start = t_curr;
      }
      if (t_curr - t_start >= mustRunDelay) {
        fn.apply(context, args);
        t_start = t_curr;
      } else {
        timer = setTimeout(function() {
          fn.apply(context, args);
        }, delay);
      }
    }
  }
  $scope.gets=function(){
    $scope.list=[];
    if($scope.search){
      var k=$scope.search,tf=false;
      if(!isNaN(k)){
        if(String(k).length>3){
          tf=true;
        }
      }else{
        tf=true;
      }
      if(tf){
        var i=0,j=0,len=$scope.lists.length,v,lll=[];
        $scope.myStock=fave.get();
        for(i;i<len;i++){
          if(hasIn($scope.lists[i])){
            v=$scope.lists[i];
            j++;
            v.has=hasClass(v);
            lll.push(v);
            // alert(lll);
            if(j==3){
              break;
            }
          }
        }
        // alert(lll.length);
        $scope.list=lll;
      }
    }
  }
  function hasIn(i){
    var r=false;
    if( (i.stockCode.indexOf(String($scope.search))!=-1) || (i.stockName.indexOf($scope.search)!=-1)||(i.stockPinyin.indexOf($scope.search)!=-1) ){
      r=true;
    }
    return r;
  }
  function hasClass(v){
    var k='0',i=0,D=$scope.myStock;
    for(i;i<D.length;i++){
      if(D[i].exchangeType==v.exchangeType && D[i].stockCode == v.stockCode){
        k="1";
        break;
      }
    }
    return k;
  }
  $scope.add=function(i){
    var o=$scope.list[i];
    fave.add(o.exchangeType,o.stockCode);
    $scope.list[i].has="1";
  }
  $scope.remove=function(i){
    var o=$scope.list[i];
    fave.remove(o.exchangeType,o.stockCode);
    $scope.list[i].has="0";
  }
}]).controller('t1', ['$scope','$rootScope','$http','$routeParams','holidayDatas',function($scope,$rootScope,$http,$routeParams,holidayDatas){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='black';
  clearTimeout(window.indexAutoK);
  if(!holidayDatas.check()){
    holidayDatas.set();
  }
  $scope.holiday=holidayDatas.get();
  var t=$routeParams.t;
  if(!t){t=1;}
  if(t>20){t=20;}
  $scope.jyr=t;
  $scope.customBox=false;
  $scope.money=0;
  $scope.customList=[];
  function calc(){
    $scope.total_money=$scope.money*(1+$scope.leverage_ratio);
    // $scope.yjx=Number($scope.money)+Number($scope.money*$scope.leverage_ratio*$scope.keep_risk_ratio);
    $scope.yjx=(Number($scope.money)*1.10).toFixed(2);
    // $scope.pcx=Number($scope.money)+Number($scope.money*$scope.leverage_ratio*$scope.close_risk_ratio);
    $scope.pcx=(Number($scope.money)*1.07).toFixed(2);
    if(t==1){
      $scope.glf=$scope.money*$scope.management_fee*(Number($scope.jyr)+1);
    }else{
      $scope.glf=$scope.money*$scope.management_fee*(Number($scope.jyr));
    }
    $scope.fxbzj=$scope.money*$scope.leverage_ratio;
    $scope.glfjyr=$scope.money*$scope.management_fee;
    calcDay();
  }
  $scope.clearMoney=function(){$scope.money='';}
  if(t==1){
    $scope.t_d=false;
    $scope.title='T+1实盘';
    $http.get(stock.data.base+'finance/tand1',{params:V}).success(function(data){
      $scope.customList=data.tAnd1.split(',');
      $scope.money=$scope.customList[0];
      $scope.min_balance=$scope.customList[0];
      var d=data.tAnd1Rules[0];
      $scope.financeRuleId= d.id;
      $scope.share_ratio=d.shareRatio;
      $scope.keep_risk_ratio=d.keepRiskRatio;
      $scope.close_risk_ratio=d.closeRiskRatio;
      $scope.leverage_ratio=d.leverageRatio;
      $scope.management_fee=d.managementFee;
      $scope.max_balance=d.maxBalance;
      calc();
      setTimeout(function(){
        $("#sp a").eq(0).addClass('cur');
      },100);
    });
  }else{
    $scope.title='T+D实盘';
    $scope.t_d=true;
    $scope.bzjbl_of=false;
    $scope.bzjblToggle=function(){$scope.bzjbl_of=!$scope.bzjbl_of;}
    $http.get(stock.data.base+'finance/tandD',{params:V}).success(function(data){
      $scope.customList=data.tAndD.split(',');
      $scope.money=$scope.customList[0];
      $scope.min_balance=$scope.customList[0];
      $scope.tAndDRules=data.tAndDRules;
      var i=0,len=data.tAndDRules.length,bzjbl_list=[];
      for(i;i<len;i++){
        bzjbl_list.push(data.tAndDRules[i].leverageRatio);
      }
      $scope.bzjbl_list=bzjbl_list;
      $scope.bzjbl=$scope.bzjbl_list[0];
      var d=data.tAndDRules[0];
      $scope.financeRuleId= d.id;
      $scope.share_ratio=d.shareRatio;
      $scope.keep_risk_ratio=d.keepRiskRatio;
      $scope.close_risk_ratio=d.closeRiskRatio;
      $scope.management_fee=d.managementFee;
      $scope.leverage_ratio=$scope.bzjbl;
      $scope.max_balance=d.maxBalance;
      calc();
      setTimeout(function(){
        $("#sp a").eq(0).addClass('cur');
      },100);
    });
    $scope.bzjblSet=function(i){
      $('#bzjbl_of li').removeClass('on');
      $('#bzjbl_of li').eq(i).addClass('on');
      var d=$scope.tAndDRules[i];
      $scope.financeRuleId= d.id;
      $scope.bzjbl=d.leverageRatio;
      $scope.share_ratio=d.shareRatio;
      $scope.keep_risk_ratio=d.keepRiskRatio;
      $scope.close_risk_ratio=d.closeRiskRatio;
      $scope.management_fee=d.managementFee;
      $scope.leverage_ratio=$scope.bzjbl;
      $scope.max_balance=d.maxBalance;
      $scope.bzjbl_of=!$scope.bzjbl_of;
      calc();
    }
    $scope.jry_ins=function(){
      if($scope.jyr>2){$scope.jyr--;}
      calc();
    }
    $scope.jry_plus=function(){
      if($scope.jyr<20){$scope.jyr++;}
      calc();
    }
  }
  $scope.custom=function(){$scope.customBox=!$scope.customBox;}
  $scope.setcustom=function(){
    var d=$scope.money/1000;
    if(d<1){d=1;}
    d=Math.floor(d);
    d=d*1000;
    if(d>$scope.max_balance){
      d=$scope.max_balance;
    }else if(d<$scope.min_balance){
      d=$scope.min_balance;
    }
    $scope.money=d;
    var k=$scope.customList.indexOf(String(d));
    if(k==-1){
      $("#sp a").removeClass('cur');
      document.getElementById("customArea").innerHTML='<a class="cur"><b>'+d+'</b><i>实盘资金</i></a>';
    }else{
      $("#sp a").removeClass('cur');
      $("#sp a").eq(k).addClass('cur');
    }
    $scope.customBox=!$scope.customBox;
    calc();
  }
  $scope.setmoney=function(e){
    var k=$scope.customList[e];
    $("#sp a").removeClass('cur');
    $("#sp a").eq(e).addClass('cur');
    $scope.money=k;
    calc();
  }
  $scope.apply=function(){
    $scope.openDialog=true;
    var txt='确认申请'+$scope.money+'元的';
    if($scope.t_d){
      txt+='"T+D实盘"';
    }else{
      txt+='"T+1实盘"';
    }
    $scope.dialog={
      title:"申请确认",
      txt:txt,
      suretxt:'确认',
      cancaltxt:'取消',
      cancel:function(){
        $scope.openDialog=false;
      },
      sure:function(){
        $scope.doFinance();
        $scope.openDialog=false;
      }
    };
  }
  $scope.doFinance=function(){
    var type=$scope.t_d?2: 1;
    var times=Number($scope.jyr)+1,d={version:V.version,requestType:V.requestType,balance:$scope.money,times:times,type:type,financeRuleId:$scope.financeRuleId};
    if(t==1){
      times=Number($scope.jyr)+1;
    }else{
      times=Number($scope.jyr);
    }
    d.times=times;
    $http.get(stock.data.base+'user/core/doFinance',{params:d}).success(function(d){
      if(d.flag==-1){
        location.hash="#/signIn";
      }else if(d.flag==1){
        location.hash="#/myFinances";
      }else if(d.flag==-2){
        if(confirm(d.message)){
          location.href="#/infoVerify";
        };
      }else if(d.flag==2){
        if(confirm(d.message+",去充值")){
          location.href="#/recharge";
        };
      }else{
        alert(d.message);
      }
    });
  }
  $scope.t1time=false;
  $scope.t1timeT=function(){$scope.t1time=!$scope.t1time;}
  $scope.tdtime=false;
  $scope.tdtimeT=function(){$scope.tdtime=!$scope.tdtime;}
  $scope.t1yjx=false;
  $scope.t1yjxT=function(){$scope.t1yjx=!$scope.t1yjx;}
  $scope.t1pcx=false;
  $scope.t1pcxT=function(){$scope.t1pcx=!$scope.t1pcx;}
  $scope.bzjbltip=false;
  $scope.bzjbltipT=function(){$scope.bzjbltip=!$scope.bzjbltip;}
  var step=86400000,T=[];
  function calcDay(){
    T=[];
    var d=new Date().getTime()+step,sr;
    if(new Date().getHours()>15){
      d+=step;
    }
    sr=new Date(d);
    d=sr.getFullYear()+"-"+addZero(sr.getMonth()+1)+"-"+addZero(sr.getDate())+" 15:00:00";
    var ttt=new Date(d).getTime();
    if(!ttt){
      ttt=sr.getFullYear()+"/"+addZero(sr.getMonth()+1)+"/"+addZero(sr.getDate())+" 15:00:00";
      ttt=new Date(ttt).getTime();
    }
    _calcDay(ttt);
    var e=new Date(T[T.length-1]);
    $scope.endtime=addZero(e.getMonth()+1)+"-"+addZero(e.getDate())+" "+addZero(e.getHours())+":"+addZero(e.getMinutes())+":"+addZero(e.getSeconds());
  }
  function _calcDay(d){
    if(isWeekEnd(d)||isVacation(d)){
      _calcDay(d+step);
    }else{
      T.push(d);
      if(T.length<$scope.jyr){
        _calcDay(d+step);
      }
    }
  }
  function isWeekEnd(d){
    var d=new Date(d).getDay();
    return (d==0||d==6)?true:false;
  }
  function isVacation(d){
    var arr=$scope.holiday.times,e=new Date(d),dd=e.getFullYear()+addZero(e.getMonth()+1)+addZero(e.getDate())+"";
    return (arr.indexOf(dd)==-1)?false:true;
  }
  function addZero(i){return (i<10)?"0"+i:i;}
}]).controller('rula', ['$scope','$rootScope', function($scope,$rootScope){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=true;
  $scope.back=function(){
    history.go(-1);
  }
}]).controller('signIn',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $scope.data={userName:'',password:'',version:V.version,requestType:V.requestType};
  $scope.lock=false;
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.clearusername=function(){
    $scope.data.userName='';
  }
  $scope.clearpassword=function(){
    $scope.data.password='';
  }
  $scope.check=function(){
    $scope.ck=false;
    if($scope.data.password && $scope.data.userName ){
      if($scope.data.password.length>5){
        $scope.ck=true;
      }
    }
  }
  $scope.signIn=function(){
    if($scope.lock){return false;}
    $scope.lock=true;
    if(!$scope.data.userName){
      alert('请输入正确的手机号');
      $scope.lock=false;
      return false;
    }
    if(!$scope.data.password){
      alert('请输入密码');
      $scope.lock=false;
      return false;
    }
    $scope.loading=true;
    $http.get(stock.data.user+'user/loginPost',{params:$scope.data}).success(function(data){
      $scope.lock=false;
      $scope.loading=false;
      if(data.flag==1){
        // alert('登录成功');
        if(history.length>2){
          history.back();
        }else{
          location.hash="#/index";  
        }
      }else{
        alert(data.message);
      }
    }).error(function(d){
      $scope.lock=false;
    });
  }
}]).controller('signUp',['$scope','$rootScope','$interval','$http','$routeParams',function($scope,$rootScope,$interval,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  function updateTime(){$scope.count--;}
  function isPhone(i){
    var r = /^\+?[1-9][0-9]*$/;
    return (!r.test(i) || i.length!=11)?false:true;
  }
  $scope.clearmobile=function(){
    $scope.data.mobile='';
  }
  $scope.clearverifycode=function(){
    $scope.data.verifyCode='';
  }
  $scope.clearpassword=function(){
    $scope.data.password='';
  }
  $scope.check=function(){
    $scope.ck=false;
    if($scope.data.password && $scope.data.mobile && $scope.data.verifyCode ){
      if($scope.data.password.length>5 && $scope.data.verifyCode.length==5){
        $scope.ck=true;
      }
    }
  }
  function isPassword(i){return true;}
  $scope.sending=false;
  $scope.lock=false;
  $scope.sendMobile={};
  $scope.count=60;
  $scope.getVri=function(){
    if($scope.lock){return false;}
    if($scope.sending){return false;}
    $scope.lock=true;
    if(!isPhone($scope.data.mobile)){
      alert('请输入正确的手机号');
      return false;
    }
    $scope.sendMobile={mobile:$scope.data.mobile,version:V.version,requestType:V.requestType};
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
  $scope.data={verifyCode:'',mobile:'',password:'',version:V.version,requestType:V.requestType};
  $scope.signUp=function(){
    if(!isPhone($scope.data.mobile)){
      alert('请输入正确的手机号');
      return false;
    }
    if(!$scope.data.verifyCode){
      alert('请输入验证码');
      return false;
    }
    if(!isPassword($scope.data.password)){
      alert('请输入密码');
      return false;
    }
    if($scope.lock){return false;}
    $scope.loading=true;
    $scope.lock=true;
    $http.get(stock.data.user+'register/registerByMobile',{params:$scope.data}).success(function(data){
      $scope.lock=false;
      $scope.loading=false;
      if(data.flag==1){
        alert('注册成功');
        location.hash="#/index";
      }else{
        alert(data.message);
      }
    }).error(function(d){
      $scope.lock=false;
    });
  }
}]).controller('password',['$scope','$rootScope','$interval','$http','$routeParams',function($scope,$rootScope,$interval,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  function updateTime(){$scope.count--;}
  function isPhone(i){
    var r = /^\+?[1-9][0-9]*$/;
    return (!r.test(i) || i.length!=11)?false:true;
  }
  $scope.clearmobile=function(){
    $scope.data.mobile='';
  }
  $scope.clearverifycode=function(){
    $scope.data.verifyCode='';
  }
  $scope.clearpassword=function(){
    $scope.data.newPassword='';
  }
  $scope.check=function(){
    $scope.ck=false;
    if($scope.data.newPassword && $scope.data.mobile && $scope.data.verifyCode ){
      if($scope.data.newPassword.length>5 && $scope.data.verifyCode.length==5){
        $scope.ck=true;
      }
    }
  }
  function isPassword(i){return true;}
  $scope.sending=false;
  $scope.lock=false;
  $scope.sendMobile={};
  $scope.count=60;
  $scope.getVri=function(){
    if($scope.lock){return false;}
    if($scope.sending){return false;}
    $scope.lock=true;
    if(!isPhone($scope.data.mobile)){
      alert('请输入正确的手机号');
      return false;
    }
    $scope.sendMobile={mobile:$scope.data.mobile,version:V.version,requestType:V.requestType};
    $scope.sending=true;
    $http.get(stock.data.user+'user/get_forget_password',{params:$scope.sendMobile}).success(function(data){
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
  $scope.data={verifyCode:'',mobile:'',newPassword:'',version:V.version,requestType:V.requestType};
  $scope.signUp=function(){
    if(!isPhone($scope.data.mobile)){
      alert('请输入正确的手机号');
      return false;
    }
    if(!$scope.data.verifyCode){
      alert('请输入验证码');
      return false;
    }
    if(!isPassword($scope.data.newPassword)){
      alert('请输入密码');
      return false;
    }
    if($scope.lock){return false;}
    $scope.loading=true;
    $scope.lock=true;
    $http.get(stock.data.user+'user/update_password',{params:$scope.data}).success(function(data){
      $scope.lock=false;
      $scope.loading=false;
      if(data.flag==1){
        alert('注册成功');
        location.hash="#/index";
      }else{
        alert(data.message);
      }
    }).error(function(d){
      $scope.lock=false;
    });
  }
}]).controller('recharge',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.lock=false;
  $scope.o={};
  $scope.o.money=100;
  $scope.es=false;
  $scope.d={};
  $scope.show=false;
  $http.get(stock.data.stock+'user/core/getCurrentUserAcount',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      $scope.balance=d.acountVo.currentBalance;
    }
  });
  $scope.back=function(){
    history.go(-1);
  }
  $scope.s1=function(){
    $("#es1").show();
    $("#es1B").show();
    $("#es2").hide();
    $("#es2B").hide();
  }
  $scope.o2={
    clear:function(){
      console.log(2);
      $scope.o.money='';
    },
    ck:function(){
      console.log(1);
    }
  }
  $scope.set=function(x){
    $scope.o.money=x;
  }
  $scope.z={};
  $http.get(stock.data.stock+'user/core/getMyBanksInfo',{params:V}).success(function(d){
    if(d.userBanks.length==0){
      $scope.z.hasBank=false;
      $scope.z.banks=[];
    }else{
      $scope.z.banks=d.userBanks;
      $scope.z.hasBank=true;
      $scope.z.initBank=d.userBanks[0].bankName+"("+d.userBanks[0].cardNo.substr(-4,4)+")";
      $scope.b=d.userBanks[0];
      setTimeout(function(){
        $("#showBankList li").eq(0).addClass('on');
      },300);
    }
  });
  $scope.toggleBankList=function(){
    $scope.z.showBankList=!$scope.z.showBankList;
  }
  $scope.recharge=function(){
    if(!$scope.o.money){
      alert('输入金额');
      return false;
    }
    var p="pay_code="+$scope.b.bankIntroduce+"&acc_no="+$scope.b.cardNo+"&id_card="+$scope.b.idCode+"&id_holder="+$scope.b.trueName+"&money="+$scope.o.money+"&version="+V.version+"&requestType="+V.requestType+'&callback=M.recharge';
    $("#es1").hide();
    $("#es1B").hide();
    $("#es2").show();
    $("#es2B").show();
    // $http.jsonp('http://www.new.com/pay/user/core/ufubao_h5?'+p);
    $http.jsonp(stock.data.pay+'user/core/ufubao_h5?'+p);
  }
  $scope.btnOk=function(){
    $('#form').submit();
  }
  $scope.setBankCard=function(x){
    var y=$scope.z.banks[x];
    $scope.b=y;
    $scope.z.initBank=y.bankName+"("+y.cardNo.substr(-4,4)+")";
    $("#showBankList li").removeClass('on');
    $("#showBankList li").eq(x).addClass('on');
    $scope.toggleBankList();
  }
  $scope.addBankCard=function(){
    location.href="#/infoBankAdd";
  }
}]).controller('rechargeSuccess',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
}]).controller('home',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $scope.navHome=true;
  $scope.username='';
  $http.get(stock.data.stock+'user/core/getCurrentUserAcount',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      $scope.currentBalance=d.acountVo.currentBalance;
      $scope.currentBonus=d.acountVo.currentBonus;
      $scope.username=d.acountVo.userName;
    }
  });
}]).controller('info',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $http.get(stock.data.stock+'user/core/my_info',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      if(d.username.substr(0,2)=="m-"){
        $scope.username='未设置';
        $scope.usernameSet=true;
      }else{
        $scope.username=d.username;
      }
      $scope.mobile=d.mobile;
      var name='未认证',bankName='未绑定';
      if(d.bindingIdentify==1){name=d.name;}
      if(d.bindingBanked==1){bankName=d.bankName+'('+d.bankAccount.substr(-4,4)+')';}
      $scope.name=name;
      $scope.bankName=bankName;
    }
  });
  $scope.lock=false;
  $scope.signOut=function(){
    if(confirm('确认退出账号么')){
      if($scope.lock){return false;}
      $scope.lock=true;
      $http.get(stock.data.stock+'user/core/loginOut',{params:V}).success(function(d){
        if(d.flag==1){
          location.href="#/index";
        }else{
          alert(d.message);
        }
      });
    }
  }
}]).controller('infoUsername',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $scope.v={tusername:''};
  $scope.cleared=function(){
    $scope.v.tusername='';
  }
  $http.get(stock.data.stock+'user/core/my_info',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      if(d.username.substr(0,2)=="m-"){
        $scope.v.tusername='';
      }
    }
  });
  $scope.save=function(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={version:V.version,requestType:V.requestType,username:$scope.v.tusername};
    $http.get(stock.data.stock+'user/core/setAccount',{params:p}).success(function(d){
      alert(d.message);
      if(d.flag==1){location.hash="#/info";}
      $scope.lock=false;
    });
  }
}]).controller('infoMobile',['$scope','$rootScope','$http','$routeParams','$interval',function($scope,$rootScope,$http,$routeParams,$interval){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=true;
  $scope.sending=false;
  $scope.v={password:"",mobile:'',verify:''};
  $scope.clear1=function(){$scope.v.password='';}
  $scope.clear2=function(){$scope.v.mobile='';}
  $scope.clear3=function(){$scope.v.verify='';}
  function updateTime(){$scope.count--;}
  function isPhone(i){
    var r = /^\+?[1-9][0-9]*$/;
    return (!r.test(i) || i.length!=11)?false:true;
  }
  function isPassword(i){return true;}
  $scope.lock=false;
  $scope.count=60;
  $scope.getVerify=function(){
    if($scope.lock){return false;}
    if($scope.sending){return false;}
    if(!isPhone($scope.v.mobile)){
      alert('请输入正确的手机号');
      return false;
    }
    var p={mobile:$scope.v.mobile,version:V.version,requestType:V.requestType};
    $scope.lock=true;
    $scope.sending=true;
    $http.get(stock.data.user+'user/core/updateUserMobile',{params:p}).success(function(data){
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
  $scope.done=function(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={password:$scope.v.password,mobile:$scope.v.mobile,validateCodeCheck:$scope.v.verify,version:V.version,requestType:V.requestType};
    $http.get(stock.data.user+'user/core/verifyUpdateMobile',{params:p}).success(function(data){
      $scope.lock=false;
      alert(data.message);
      if(data.flag==1){
        location.hash="#/info"; 
      }
    }).error(function(d){
      $scope.lock=false;
    });
  }
}]).controller('infoVerify',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $scope.bind=true;
  $scope.o={name:"",identify:""};
  $scope.clear1=function(){$scope.o.name='';}
  $scope.clear2=function(){$scope.o.identity='';}
  $http.get(stock.data.stock+'user/core/my_info',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      if(d.bindingIdentify=="1"){
        $scope.bind=true;
        $scope.o.name=d.name;
        $scope.o.identify=d.identify;
      }else{
        $scope.bind=false;
      }
    }
  });
  $scope.lock=false;
  $scope.done=function(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={name:$scope.o.name,identityNumber:$scope.o.identity,version:V.version,requestType:V.requestType};
    $http.get(stock.data.stock+'user/core/bind_identify_name',{params:p}).success(function(d){
      $scope.lock=false;
      alert(d.message);
      if(d.flag==1){
        location.reload();
      }
    });
  }
}]).controller('infoBank',['$scope','$rootScope','$http','$routeParams','banks','citys',function($scope,$rootScope,$http,$routeParams,banks,citys){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.loading=true;
  $http.get(stock.data.stock+'user/core/my_info',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      if(d.bindingBanked=="1"){
        location.hash="#/infoBankList";
      }else{
        location.hash="#/infoBankBind";
      }
    }
  });
}]).controller('infoBankList',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $http.get(stock.data.stock+'user/core/getMyBanksInfo',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      $scope.res=stock.res;
      $scope.list=d.userBanks;
    }
  });
  $scope.detail=function(x){
    var D=$scope.list[x];
    if(x>0){
      location.hash="#/infoBankDetail/"+D.id+"/"+D.bankName+"/"+D.cardNo+"/"+D.bankIntroduce;
    }
  }
}]).controller('infoBankDetail',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  $scope.userBankId=$routeParams.p1;
  $scope.bankName=$routeParams.p2;
  $scope.cardNo=$routeParams.p3;
  $scope.bankIntroduce=$routeParams.p4;
  clearTimeout(window.indexAutoK);
  $scope.show=true;
  $scope.res=stock.res;
  $scope.toggle=function(){
    $scope.lock=!$scope.lock; 
  }
  $scope.del=function(x){
    if(confirm('确认删除么?')){
      $scope.loading=true;
      var p={version:V.version,requestType:V.requestType,userBankId:$scope.userBankId};
      $http.get(stock.data.stock+'user/core/deleteMyUserBanksInfo',{params:p}).success(function(d){
        $scope.loading=false;
        alert(d.message);
        if(d.flag==1){
          location.hash="#/infoBankList";
        }
      });
    }
  }
}]).controller('infoBankBind', ['$scope','$rootScope','$http','$routeParams','banks','citys',function($scope,$rootScope,$http,$routeParams,banks,citys){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $scope.bindingBanked=true;
  $scope.bindingIdentify=true;
  $scope.o={name:"",identityNumber:"",bankAccount:"",bank:"",province:"",city:"",branche:""};
  $scope.banks=banks;
  $scope.provinces=citys.provinces;
  $scope.setCitys=function(){
    $scope.citys=citys.city[$scope.o.province];
    $scope.o.city=$scope.citys[0];
    $scope.o.branche="选择开户支行";
  }
  $scope.clear1=function(){$scope.o.name='';}
  $scope.clear2=function(){$scope.o.identityNumber='';}
  $scope.clear3=function(){$scope.o.bankAccount='';}
  $scope.clear4=function(){$scope.o.bank='';}
  $scope.clear5=function(){$scope.o.province='';}
  $scope.clear6=function(){$scope.o.city='';}
  $http.get(stock.data.stock+'user/core/my_info',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      if(d.bindingIdentify=="1"){
        $scope.bindingIdentify=true;
        $scope.o.name=d.name;
        $scope.o.identityNumber=d.identify;
      }else{
        $scope.bindingIdentify=false;
      }
      if(d.bindingBanked=="1"){
        $scope.bindingBanked=true;
        $scope.o.bankAccount=d.bankAccount;
        $scope.o.bank=d.bankName;
        $scope.o.province=d.province;
        $scope.o.branche=d.dept;
        $scope.o.city=d.city;
      }else{
        $scope.bindingBanked=false;
        $scope.o.bank='选择银行';
        $scope.o.province='选择省';
        $scope.o.city='选择市';
        $scope.o.branche='选择开户支行';
      }
    }
  });
  $scope.resetBranch=function(){
    $scope.o.branche="选择开户支行";
  }
  $scope.lock=false;
  $scope.done=function(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={version:V.version,requestType:V.requestType};
    if(!$scope.bindingIdentify){
      p.name=$scope.o.name;
      p.identityNumber=$scope.o.identityNumber;
    }
    p.bankAccount=$scope.o.bankAccount;
    p.bank=$scope.o.bank;
    p.province=$scope.o.province;
    p.city=$scope.o.city;
    p.dept=$scope.o.branche;
    $http.get(stock.data.stock+'user/core/bind_bank_card',{params:p}).success(function(d){
      alert(d.message);
      $scope.lock=false;
      if(d.flag==1){
        location.hash="#/infoBankList";
      }
    });
  }
  $scope.getChinaBranch=false;
  $scope.openChinaBranch=function(){
    var p={proName:$scope.o.province,cityName:$scope.o.city,bankName:$scope.o.bank,version:V.version,requestType:V.requestType};
    if(p.proName=="选择省" || p.cityName=="选择市" || !p.bankName=="选择银行"){
      return false;
    }
    $http.get(stock.data.stock+'getChinaBranches',{params:p}).success(function(d){
      $scope.branches=d.branches;
      $scope.ChinaBranchs=d.branches;
    });
    $scope.getChinaBranch=true;
  }
  $scope.s={keyword:''};
  $scope.search=function(){
    if(!$scope.s.keyword){
      $scope.ChinaBranchs=$scope.branches;
      return false;
    }
    var i=0,D=$scope.branches;
    $scope.ChinaBranchs=[];
    for(i;i<D.length;i++){
      if(D[i].indexOf($scope.s.keyword)!=-1){
        $scope.ChinaBranchs.push(D[i]);
      }
    }
  }
  $scope.back=function(){
    $scope.getChinaBranch=false;
  }
  $scope.setChinaBranch=function(i){
    $scope.o.branche=$scope.ChinaBranchs[i];
    $scope.back();
  }
}]).controller('infoBankAdd', ['$scope','$rootScope','$http','$routeParams','banks','citys',function($scope,$rootScope,$http,$routeParams,banks,citys){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $scope.bindingBanked=true;
  $scope.bindingIdentify=true;
  $scope.o={name:"",identityNumber:"",bankAccount:"",bank:"",province:"",city:"",branche:""};
  $scope.banks=banks;
  $scope.provinces=citys.provinces;
  $scope.setCitys=function(){
    $scope.citys=citys.city[$scope.o.province];
    $scope.o.city=$scope.citys[0];
    $scope.o.branche="选择开户支行";
  }
  $scope.clear1=function(){$scope.o.name='';}
  $scope.clear2=function(){$scope.o.identityNumber='';}
  $scope.clear3=function(){$scope.o.bankAccount='';}
  $scope.clear4=function(){$scope.o.bank='';}
  $scope.clear5=function(){$scope.o.province='';}
  $scope.clear6=function(){$scope.o.city='';}
  $http.get(stock.data.stock+'user/core/my_info',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      if(d.bindingIdentify=="1"){
        $scope.bindingIdentify=true;
        $scope.o.name=d.name;
        $scope.o.identityNumber=d.identify;
      }
      $scope.o.bank='选择银行';
      $scope.o.province='选择省';
      $scope.o.city='选择市';
      $scope.o.branche='选择开户支行';
    }
  });
  $scope.resetBranch=function(){
    $scope.o.branche="选择开户支行";
  }
  $scope.lock=false;
  $scope.done=function(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={version:V.version,requestType:V.requestType};
    if(!$scope.bindingIdentify){
      p.name=$scope.o.name;
      p.identityNumber=$scope.o.identityNumber;
    }
    p.bankAccount=$scope.o.bankAccount;
    p.bank=$scope.o.bank;
    p.province=$scope.o.province;
    p.city=$scope.o.city;
    p.dept=$scope.o.branche;
    $http.get(stock.data.stock+'user/core/addMyBankInfo',{params:p}).success(function(d){
      alert(d.message);
      $scope.lock=false;
      if(d.flag==1){
        // location.hash="#/infoBankList";
        $scope.lastStep();
      }
    });

  }
  $scope.getChinaBranch=false;
  $scope.openChinaBranch=function(){
    var p={proName:$scope.o.province,cityName:$scope.o.city,bankName:$scope.o.bank,version:V.version,requestType:V.requestType};
    if(p.proName=="选择省" || p.cityName=="选择市" || !p.bankName=="选择银行"){
      return false;
    }
    $http.get(stock.data.stock+'getChinaBranches',{params:p}).success(function(d){
      $scope.branches=d.branches;
      $scope.ChinaBranchs=d.branches;
    });
    $scope.getChinaBranch=true;
  }
  $scope.s={keyword:''};
  $scope.search=function(){
    if(!$scope.s.keyword){
      $scope.ChinaBranchs=$scope.branches;
      return false;
    }
    var i=0,D=$scope.branches;
    $scope.ChinaBranchs=[];
    for(i;i<D.length;i++){
      if(D[i].indexOf($scope.s.keyword)!=-1){
        $scope.ChinaBranchs.push(D[i]);
      }
    }
  }
  $scope.back=function(){
    $scope.getChinaBranch=false;
  }
  $scope.setChinaBranch=function(i){
    $scope.o.branche=$scope.ChinaBranchs[i];
    $scope.back();
  }
  $scope.lastStep=function(){
    history.go(-1);
  }
}]).controller('infoPassword',['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=true;
  $scope.o={password:'',password1:'',password2:''};
  $scope.clear1=function(){$scope.o.password='';}
  $scope.clear2=function(){$scope.o.password1='';}
  $scope.clear3=function(){$scope.o.password2='';}
  $scope.lock=false;
  $scope.done=function(){
    if($scope.lock){return false;}
    if(!$scope.o.password){
      alert('旧密码不能为空');
      return false;
    }
    if(!$scope.o.password1){
      alert('新密码不能为空');
      return false;
    }
    if($scope.o.password1!=$scope.o.password2){
      alert('两次密码不一致');
      return false;
    }
    $scope.lock=true;
    var p={version:V.version,requestType:V.requestType,newPassword:$scope.o.password1,oldPassword:$scope.o.password};
    $http.get(stock.data.stock+'user/core/updateNewPassword',{params:p}).success(function(d){
      alert(d.message);
      $scope.lock=false;
      if(d.flag==1){
        location.hash="#/info";
      }
    });
  }
}]).controller('message', ['$scope','$rootScope','$http',function($scope,$rootScope,$http){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=true;
  $scope.no1=9;
  $scope.no2=9;
  $http.get(stock.data.stock+'user/core/getMessageType',{params:V}).success(function(d){
    if(d.flag==1){
      $scope.list=d.messageVos;
    }
  });
}]).controller('messageDetail', ['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  if($routeParams.p2){
    $scope.page=Number($routeParams.p2);
  }else{
    $scope.page=0;
  }
  if($routeParams.p1){
    $scope.type=$routeParams.p1;
  }else{
    $scope.type=1;
  }
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $scope.lock=false;
  function getMessageList(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={version:V.version,requestType:V.requestType,type:$scope.type,firstRow:$scope.page*10};
    $http.get(stock.data.stock+'user/core/getMessageList',{params:p}).success(function(d){
      $scope.lock=false;
      if(d.flag==1){
        $scope.show=true;
        $scope.list=d.messageVos;
        $scope.pageSize=d.pageSize;
      }else{
        location.hash="#/signIn";
      }
    });
  }
  getMessageList();
  $scope.prev=function(){
    if($scope.page==0){
      $scope.page=0;
    }else{
      $scope.page--;
      getMessageList();
    }
  }
  $scope.next=function(){
    if($scope.page==$scope.pageSize-1){
      $scope.page=$scope.pageSize-1;
    }else{
      $scope.page++;
      getMessageList();
    }
  }
}]).controller('getMessageDetail', ['$scope','$rootScope','$http','$routeParams', function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $scope.type=$routeParams.p1;
  var userMessageId=$routeParams.p2;
  $scope.page=$routeParams.p3;
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  var p={version:V.version,requestType:V.requestType,userMessageId:userMessageId};
  $http.get(stock.data.stock+'user/core/getMessageDetail',{params:p}).success(function(d){
    if(d.flag==1){
      $scope.show=true;
      if($scope.type==2){
        $scope.d=d.userBusinessVo;
      }else{
        $scope.d=d.userMessage;
      }
    }else{
      location.hash="#/signIn";
    }
  });
}]).controller('balance', ['$scope','$rootScope','$http',function($scope,$rootScope,$http){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $http.get(stock.data.stock+'user/core/getCurrentUserAcount',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      $scope.balance=d.acountVo.currentBalance;
      $scope.money=d.acountVo.frozenBalance;
    }
  });
}]).controller('withdraw', ['$scope','$rootScope','$http','banks','citys',function($scope,$rootScope,$http,banks,citys){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=true;
  $scope.bindingBanked=true;
  $scope.bindingIdentify=true;
  $scope.o={name:"",identityNumber:"",bankAccount:"",bank:"",province:"",city:""};
  $scope.banks=banks;
  $scope.provinces=citys.provinces;
  $scope.setCitys=function(){
    $scope.citys=citys.city[$scope.o.province];
    $scope.o.city=$scope.citys[0];
    $scope.o.branche="选择开户支行";
  }
  $scope.clear1=function(){$scope.o.name='';}
  $scope.clear2=function(){$scope.o.identityNumber='';}
  $scope.clear3=function(){$scope.o.bankAccount='';}
  $scope.clear4=function(){$scope.o.bank='';}
  $scope.clear5=function(){$scope.o.province='';}
  $scope.clear6=function(){$scope.o.city='';}
  $http.get(stock.data.stock+'user/core/my_info',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      if(d.bindingIdentify=="1"){
        $scope.bindingIdentify=true;
        $scope.o.name=d.name;
        $scope.o.identityNumber=d.identify;
      }else{
        $scope.bindingIdentify=false;
      }
      if(d.bindingBanked=="1"){
        $scope.bindingBanked=true;
        $scope.o.bankAccount=d.bankAccount;
        $scope.o.bank=d.bankName;
        $scope.o.province=d.province;
        $scope.o.city=d.city;
        $scope.o.branche=d.dept;
      }else{
        $scope.bindingBanked=false;
        $scope.o.bank='选择银行';
        $scope.o.province='选择省';
        $scope.o.city='选择市';
        $scope.o.branche='选择开户支行';
      }
    }
  });
  $http.get(stock.data.stock+'user/core/getCurrentUserAcount',{params:V}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.hide=true;
      $scope.withdraw=d.acountVo.currentBalance;
    }
  });
  $scope.lock=false;
  $scope.save=function(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={version:V.version,requestType:V.requestType};
    if(!$scope.bindingIdentify){
      p.name=$scope.o.name;
      p.identityNumber=$scope.o.identityNumber;
    }
    p.bankAccount=$scope.o.bankAccount;
    p.bank=$scope.o.bank;
    p.province=$scope.o.province;
    p.city=$scope.o.city;
    p.dept=$scope.o.branche;
    $http.get(stock.data.stock+'user/core/bind_bank_card',{params:p}).success(function(d){
      alert(d.message);
      $scope.lock=false;
      if(d.flag==1){
        $scope.save2();
      }
    });
  }
  $scope.o.m1=1;
  $scope.save2=function(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={version:V.version,requestType:V.requestType,money:$scope.o.m1};
    $http.get(stock.data.stock+'user/core/withDrawal',{params:p}).success(function(d){
      alert(d.message);
      $scope.lock=false;
      if(d.flag==1){
        location.hash="#/balance";
      }
    });
  }
  $scope.resetBranch=function(){
    $scope.o.branche="选择开户支行";
  }
  $scope.getChinaBranch=false;
  $scope.openChinaBranch=function(){
    var p={proName:$scope.o.province,cityName:$scope.o.city,bankName:$scope.o.bank,version:V.version,requestType:V.requestType};
    if(p.proName=="选择省" || p.cityName=="选择市" || !p.bankName=="选择银行"){
      return false;
    }
    $http.get(stock.data.stock+'getChinaBranches',{params:p}).success(function(d){
      $scope.branches=d.branches;
      $scope.ChinaBranchs=d.branches;
    });
    $scope.getChinaBranch=true;
  }
  $scope.s={keyword:''};
  $scope.search=function(){
    if(!$scope.s.keyword){
      $scope.ChinaBranchs=$scope.branches;
      return false;
    }
    var i=0,D=$scope.branches;
    $scope.ChinaBranchs=[];
    for(i;i<D.length;i++){
      if(D[i].indexOf($scope.s.keyword)!=-1){
        $scope.ChinaBranchs.push(D[i]);
      }
    }
  }
  $scope.back=function(){
    $scope.getChinaBranch=false;
  }
  $scope.setChinaBranch=function(i){
    $scope.o.branche=$scope.ChinaBranchs[i];
    $scope.back();
  }
}]).controller('bonus', ['$scope','$rootScope','$http',function($scope,$rootScope,$http){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=true;
}]).controller('details', ['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $scope.yen=true;
  $scope.hbn=false;
  $scope.ye=[];
  $scope.yePageSize=1;
  $scope.yepages=[];
  $scope.yep=0;
  var p=$routeParams.t;
  if(p){$scope.yep=0;}
  $scope.bn=[];
  $scope.hbpages=[0];
  $scope.hbp=0;
  $scope.yeLock=false;
  function getMyFundList(){
    if($scope.yeLock){return false;}
    $scope.yeLock=true;
    var p={version:V.version,requestType:V.requestType,firstRow:$scope.yep*10,fetchSize:10};
    $http.get(stock.data.stock+'user/core/getMyFundList',{params:p}).success(function(d){
      $scope.yeLock=false;
      if(d.flag==1){
        $scope.show=true;
        $scope.ye=d.userFundDetails;
        var i=0,len=d.pageSize,a=[];
        $scope.yePageSize=len;
        for(i;i<len;i++){
          a.push(i);
        }
        $scope.yepages=a;
      }
    });
  }
  getMyFundList();
  $scope.yeprev=function(){
    if($scope.yep==0){
      $scope.yep=0;
    }else{
      $scope.yep--;
      getMyFundList();
    }
  }
  $scope.yepage=function(){
    if($scope.yep<0){
      $scope.yep=0;
    }else if($scope.yep>$scope.yePageSize){
      $scope.yep=$scope.yePageSize;
    }
    getMyFundList();
  }
  $scope.yenext=function(){
    if($scope.yep==$scope.yePageSize-1){
      $scope.yep=$scope.yePageSize-1;
    }else{
      $scope.yep++;
      getMyFundList();
    }
  }
  $scope.hbprev=function(){}
  $scope.hbpage=function(){}
  $scope.hbnext=function(){}
  $scope.sety=function(){
    $scope.yen=true;
    $scope.hbn=false;
  }
  $scope.seth=function(){
    $scope.yen=false;
    $scope.hbn=true;
  }
}]).controller('detail', ['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  var t=$routeParams.t,t2=$routeParams.t2;
  $scope.back=function(){
    var h="#/details"
    if(t2){
      h+="/"+t2;
    }
    location.hash=h;
  }
  var p={version:V.version,requestType:V.requestType,userFundDetailId:t};
  $http.get(stock.data.stock+'user/core/getMyFundDetail',{params:p}).success(function(d){
    if(d.flag==-1){
      location.hash="#/signIn";
    }else{
      $scope.show=true;
      $scope.o=d.userFundDetail;
    }
  });
}]).controller('history', ['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  if($routeParams.p1){
    $scope.page=Number($routeParams.p1);
  }else{
    $scope.page=0;
  }
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.months=3;
  $scope.hisBtn=false;
  $scope.toggleHisBtn=function(){
    $scope.hisBtn=!$scope.hisBtn;
  }
  $scope.hisB='3个月';
  $scope.setHis=function(x){
    $scope.months=x;
    if(x==12){
      $scope.hisB='1年';
    }else{
      $scope.hisB=x+'个月';
    }
    $scope.toggleHisBtn();
    $scope.page=0;
    getMyFinanceHistory();
  }
  $scope.show=false;
  $scope.lock=false;
  function getMyFinanceHistory(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={version:V.version,requestType:V.requestType,months:$scope.months,firstRow:$scope.page*10};
    $http.get(stock.data.stock+'user/core/getMyFinanceHistory',{params:p}).success(function(d){
      $scope.lock=false;
      if(d.flag==1){
        $scope.show=true;
        $scope.list=d.userFinanceHistoryVo.userFinances;
        $scope.totalProfit=d.userFinanceHistoryVo.totalProfit;
        $scope.totalPen=d.userFinanceHistoryVo.totalPen;
        $scope.pageSize=d.userFinanceHistoryVo.totalPage;
      }else{
        location.hash="#/signIn";
      }
    });
  }
  getMyFinanceHistory();
  $scope.prev=function(){
    if($scope.page==0){
      $scope.page=0;
    }else{
      $scope.page--;
      getMyFinanceHistory();
    }
  }
  $scope.next=function(){
    if($scope.page==$scope.pageSize-1){
      $scope.page=$scope.pageSize-1;
    }else{
      $scope.page++;
      getMyFinanceHistory();
    }
  }
}]).controller('historyDetail', ['$scope','$rootScope','$http','$routeParams',function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $scope.id=$routeParams.p1;
  var p={version:V.version,requestType:V.requestType,userFinanceId:$scope.id};
  $http.get(stock.data.stock+'user/core/getMyFinanceHistoryDetail',{params:p}).success(function(d){
    if(d.flag==1){
      $scope.show=true;
      $scope.closeLog=d.closeLog;
      $scope.list=d.details;
      $scope.userFinance=d.userFinance;
    }else{
      location.hash="#/signIn";
    }
  });
  $scope.detail=function(index){
    $('#historyDetail').hide();
    $('.historyDetails').hide();
    $('.historyDetails').eq(index).show();
  }
  $scope.s1=function(){
    $('#historyDetail').show();
    $('.historyDetails').hide()
  }
  $scope.back=function(){
    location.hash="#/history/"+$routeParams.p2;
  }
}]).controller('more', ['$scope','$rootScope','$http',function($scope,$rootScope,$http){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
}]).controller('aboutus', ['$scope','$rootScope','$http',function($scope,$rootScope,$http){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
}]).controller('feedback', ['$scope','$rootScope','$http',function($scope,$rootScope,$http){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.d={
    content:"",
    title:'',
    type:4,
    version:V.version,
    requestType:V.requestType
  };
  $scope.size=0;
  $scope.clearTitle=function(){
    $scope.d.title='';
    $scope.check();
  }
  $scope.check=function(){
    if($scope.d.content.length>300){
      $scope.d.content=$scope.d.content.substr(0,300);
    }
    $scope.size=$scope.d.content.length;
    if($scope.size>0 && $scope.d.title){
      $scope.saveBtn=true;
    }else{
      $scope.saveBtn=false;
    }
  }
  $scope.save=function(){
    $scope.loading=true;
    $http.get(stock.data.stock+'user/core/addUserFeedBack',{params:$scope.d}).success(function(d){
      $scope.loading=false;
      alert(d.message);
      if(d.flag==1){
        location.hash="#/more";
      }
    });
  }
}]).controller('summary', ['$scope','$rootScope','$http','$routeParams', function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  if($routeParams.p1){
    $scope.page=Number($routeParams.p1);
  }else{
    $scope.page=0;
  }
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.show=false;
  $scope.lock=false;
  function getMessageList(){
    if($scope.lock){return false;}
    $scope.lock=true;
    var p={version:V.version,requestType:V.requestType,firstRow:$scope.page*10};
    $http.get(stock.data.stock+'getInitSummary',{params:p}).success(function(d){
      $scope.lock=false;
      $scope.show=true;
      $scope.list=d.messageVos;
      $scope.pageSize=d.pageSize;
    });
  }
  getMessageList();
  $scope.prev=function(){
    if($scope.page==0){
      $scope.page=0;
    }else{
      $scope.page--;
      getMessageList();
    }
  }
  $scope.next=function(){
    if($scope.page==$scope.pageSize-1){
      $scope.page=$scope.pageSize-1;
    }else{
      $scope.page++;
      getMessageList();
    }
  }
}]).controller('news', ['$scope','$rootScope','$http','$routeParams','fave', function($scope,$rootScope,$http,$routeParams,fave){
  if(M.socket){M.socket.close();}
  if($routeParams.p1){
    $scope.type=Number($routeParams.p1);
  }else{
    $scope.type=0;
  }
  if($routeParams.p2){
    $scope.page=Number($routeParams.p2);
  }else{
    $scope.page=0;
  }
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.lock=false;
  $http.get(stock.data.stock+'getInitSummary',{params:V}).success(function(d){
    if($scope.type==0){
      $scope.type=d.channels[0].type;
    }
    $scope.nav=d.channels;
    var i=0,len=d.channels.length,j;
    for(i;i<len;i++){
      if(d.channels[i].type==$scope.type){
        j=i;
        break;
      }
    }
    setTimeout(function(){
      $("#newsNav a").eq(j).addClass('on')
    },100);
    $scope.banners=d.news_banners;
    if(d.news_banners.length>1){
      window.indexAutoK=setInterval('scroll.right()',7000);
    }
    if($scope.type==1){
      $scope.bannershow=true;
    }else{
      $scope.bannershow=false;
    }
    get();
  });
  //请求主要的数据
  function get(){
    var params={requestType: V.requestType,version: V.version,type:$scope.type,firstRow:$scope.page,fetchSize:10};
    if($scope.type==6){
      var stockCodes=[],iD=fave.get(),ij=0;
      if( !iD || iD.length>0){
        for(ij;ij<iD.length;ij++){
          iE="";
          if(iD[ij].exchangeType=="1"){
            iE="SH"+iD[ij].stockCode;
          }else{
            iE="SZ"+iD[ij].stockCode;
          }
          stockCodes.push(iE);
        }
        params.stockCodes=stockCodes.join(',');
      }
    }
    $http.get(stock.data.stock+'getNewsSummary',{params:params}).success(function(d){
      $scope.list=d.stockSummaryVos;
      $scope.pageSize=d.pageSize;
      if(d.pageSize>1){
        $scope.showpage=true;
      }else{
        $scope.showpage=false;
      }
    });
  }
  $scope.prev=function(){
    if($scope.page==0){
      $scope.page=0;
    }else{
      $scope.page--;
      get();
    }
  }
  $scope.next=function(){
    if($scope.page==$scope.pageSize-1){
      $scope.page=$scope.pageSize-1;
    }else{
      $scope.page++;
      get();
    }
  }
}]).controller('newsdetail', ['$scope','$rootScope','$http','$routeParams', function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  $scope.type=$routeParams.p2;
  $scope.page=$routeParams.p3;
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.loading=true;
  var params={requestType: V.requestType,version: V.version,stockNewsId:$routeParams.p1};
  $http.get(stock.data.base+"getStockNewsContent",{params:params}).success(function(d){
    $scope.d=d.newsContentVo;
    $scope.loading=false;
    if($scope.type==6){
      $scope.showBtn=true;
      $scope.source=encodeURI(d.newsContentVo.source);
    }
  });
  $scope.back=function(){
    location.hash="#/news/"+$scope.type+"/"+$scope.page;
  }
  switch($scope.type){
    case "1":
      $scope.title="要闻";
      break;
    case "4":
      $scope.title="研究";
      break;
    case "5":
      $scope.title="专题";
      break;
    case "6":
      $scope.title="自选";
      break;
    default:
      $scope.title="详情";
      break;
  }
}]).controller('notice', ['$scope','$rootScope','$http','$routeParams', function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  if($routeParams.p1){
    $scope.page=Number($routeParams.p1);
  }else{
    $scope.page=0;
  }
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  get();
  //请求主要的数据
  function get(){
    var params={requestType:V.requestType,version:V.version,firstRow:$scope.page,fetchSize:10};
    $http.get(stock.data.stock+'getAppNotices',{params:params}).success(function(d){
      $scope.list=d.stockSummaryVos;
      $scope.pageSize=d.pageSize;
      if(d.pageSize>1){
        $scope.showpage=true;
      }else{
        $scope.showpage=false;
      }
    });
  }
  $scope.prev=function(){
    if($scope.page==0){
      $scope.page=0;
    }else{
      $scope.page--;
      get();
    }
  }
  $scope.next=function(){
    if($scope.page==$scope.pageSize-1){
      $scope.page=$scope.pageSize-1;
    }else{
      $scope.page++;
      get();
    }
  }
}]).controller('noticedetail', ['$scope','$rootScope','$http','$routeParams', function($scope,$rootScope,$http,$routeParams){
  if(M.socket){M.socket.close();}
  var page=$routeParams.p2;
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.loading=true;
  var params={requestType: V.requestType,version: V.version,stockNewsId:$routeParams.p1};
  $http.get(stock.data.base+"getStockNewsContent",{params:params}).success(function(d){
    $scope.d=d.newsContentVo;
    $scope.loading=false;
  });
  $scope.back=function(){
    location.hash="#/notice/"+page;
  }
  $scope.title="公告";
}]).controller('event', ['$scope','$rootScope','$http', function($scope,$rootScope,$http){
  if(M.socket){M.socket.close();}
  $rootScope.bodyBg='white';
  clearTimeout(window.indexAutoK);
  $scope.loading=true;
  $http.get(stock.data.base+"queryActivity",{params:V}).success(function(d){
    $scope.list=d.pictureManages;
    $scope.loading=false;
  });
}]);
