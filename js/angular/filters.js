angular.module('filters', []).filter('indexIntroduces',function(){
	return function(x){
    var a=x.split('$');
    return a='<p>'+a.join('</p><p>')+'</p>';
  };
}).filter('to10thousand',function(){
  return function(x){
    var v;
    if(x>=10000){
      v=x/10000+"万";
    }else{
      v=x;
    }
    return v;
  };
}).filter('toPercentage',function(){
  return function(x){
    return x*100+"%";
  };
}).filter('last4',function(){
  return function(x){
    return x.substr(-4,4);
  };
}).filter('toMcode',function(){
  return function(x){
    return x==1?"SH":"SZ";
  };
}).filter('toUpDown',function(){
  return function(x){
    if(x==0){
      return "";
    }else if(x>0){
      return "up";
    }else{
      return "down";
    }
  };
}).filter('addPlus',function(){
  return function(x){
    return (x>0)?"+"+x:x;
  };
});
