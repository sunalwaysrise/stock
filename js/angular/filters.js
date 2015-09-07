angular.module('filters', []).filter('indexIntroduces',function(){
	return function(x){
    var a=x.split('$');
    return a='<p>'+a.join('</p><p>')+'</p>';
  };
}).filter('to10thousand',function(){
  return function(x){
    var v;
    if(x>=10000){
      v=(x/10000).toFixed(2)+"万";
    }else{
      v=x;
    }
    return v;
  };
}).filter('first1',function(){
  return function(x){
    return x.substr(0,4);
  };
}).filter('first2',function(){
  return function(x){
    return x.substr(4,x.length);
  };
}).filter('toPercentage',function(){
  return function(x){
    return x*100+"%";
  };
}).filter('to10Percentage',function(){
  return function(x){
    return "1/"+(1/x);
  };
}).filter('last4',function(){
  return function(x){
    return x.substr(-4,4);
  };
}).filter('hidelast',function(){
  return function(x,z){
    var i=0;z=z||1,c="";
    for(i;i<z;i++){c+="*";}
    return x.substr(0,x.length-z)+c;
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
