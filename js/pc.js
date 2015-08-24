var ycp={
  throttle:function(fn, delay, mustRunDelay){
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
  },
  screen:function (){
    var s;
    if(/msie/.test(navigator.userAgent.toLowerCase())){
      s={w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}
    }else if( /opera/.test(navigator.userAgent.toLowerCase())){
      s={w:Math.min(window.innerWidth, document.body.clientWidth),h:Math.min(window.innerHeight, document.body.clientHeight)};
    }else{
      s={w:Math.min(window.innerWidth, document.documentElement.clientWidth),h:Math.min(window.innerHeight, document.documentElement.clientHeight)}
    }
    s.left = document.documentElement.scrollLeft || document.body.scrollLeft;
    s.top = document.documentElement.scrollTop || document.body.scrollTop;
    s.sw = document.documentElement.scrollWidth || document.body.scrollWidth;
    s.sh = document.documentElement.scrollHeight || document.body.scrollHeight;
    return s;
  },
  _open:function(){
    this._tip();
    $("#lock").css({"width": this.screen().sw,"height": this.screen().sh}).show();
  },
  _tip:function(){
    var t=document.documentElement.scrollTop || document.body.scrollTop,
      viewHeight=$(window).height(),
      viewWidth=$(window).width(),
      _objHeight=551,
      _objWidth=755,
      dialogTop=(viewHeight / 2) - (_objHeight / 2) + t,dialogLeft = (viewWidth / 2) - (_objWidth / 2);
    $("#tip").css({top:dialogTop,left:dialogLeft});
  },
  opened:false,
  open:function(){
    this.opened=true;
    $("#lock,#tip").show();
    this.throttle(this._open(), 50, 100);
  },
  close:function(){
    this.opened=false;
    $("#lock,#tip").hide();
  },
  cookies:{
    get: function(name){
      if (document.cookie == null){
        return false;
      }
      var tmpDate = document.cookie;
      var tmpStart = tmpDate.indexOf(name + "=");
      if (tmpStart == -1) {
        return null;
      }
      tmpStart += name.length + 1;
      var tmpEnd = tmpDate.indexOf(";", tmpStart);
      if (tmpEnd == -1){
        return decodeURI(tmpDate.substring(tmpStart))
      };
      return decodeURI(tmpDate.substring(tmpStart, tmpEnd));
    },
    set: function(name, value, expires, path, domain, secure) {
      if (document.cookie == null) {
        return false;
      }
      var tmpCookie = name + "=" + encodeURI(value);
      if (expires != null) {
        tmpCookie += ";expires=" + expires.toGMTString();
      }
      if (path != null) {
        tmpCookie += ";path=" + path;
      }
      if (domain != null) {
        tmpCookie += ";domain=" + domain;
      }
      if (secure != null) {
        tmpCookie += ";secure=" + secure;
      }
      document.cookie = tmpCookie; 
    },
    remove: function(name, path, domain) {
      if (document.cookie == null) {
        return false;
      }
      var tmpCookie = name + "=null;expires=" + new Date(new Date().getTime() - 1000000000000).toGMTString();
      if (path != null) {
        tmpCookie += ";path=" + path;
      }
      if (domain != null) {
        tmpCookie += ";domain=" + domain;
      }
      document.cookie = tmpCookie;
    },
    clear: function(path, domain) {
      if (document.cookie == null) {
        return false;
      }
      var tmpCookie = document.cookie.split(";");
      var tmpName;
      for (var i = 0; i < tmpCookie.length; i++) {
        tmpName = tmpCookie[i].split("=")[0].strip();
        Cookie.remove(tmpName, path, domain);
      }
    } 
  }
};