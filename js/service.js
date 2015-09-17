var sdk = new WSDK(),S={
	init:function(){
		$("#J_hd").html('<a href="/"></a><h2>在线客服</h2><a href="tel:4008880872">客服电话</a>');
	},
	getArgs:function(argName){
		if (!argName) {return}
		var args = {}, query = location.search.substring(1), pairs = query.split("&");
		for (var i = 0; i < pairs.length; i++) {
			var pos = pairs[i].indexOf('=');
			if (pos == -1)
				continue;
			var argname = pairs[i].substring(0, pos), value = pairs[i].substring(pos + 1);
			value = decodeURIComponent(value);
			if (argName == argname) {
				return value;
			}
		}
	},
	MSG:[],
	getHistory:function(){
		sdk.Chat.getHistory({
			touid: S.touid,
			count:20,
			success: function(data){
				nextkey = data.data && data.data.next_key;
				if(data.data.msgs){
					S.MSG=data.data.msgs;
				}
				S.build();
			},
			error: function(error){
				console.log('get history msg fail', error);
			}
		});
	},
	build:function(){
		var i=0,h=[],D=this.MSG,msg;
		function t(x){
			var c=function(i){return (i<10)?"0"+i:i;},D=new Date(x);
    	return D.getFullYear()+"-"+c(D.getMonth()+1)+"-"+c(D.getDate())+" "+c(D.getHours())+":"+c(D.getMinutes())+":"+c(D.getSeconds());
		}
		for(i;i<D.length;i++){
			if($.trim(D[i].msg)){
				if(D[i].t==1){//service
					h.push('<div class="msg o-msg">');
				}else{//custom
					h.push('<div class="msg s-msg">');
				}
				msg=D[i].msg;
				if(msg.indexOf('interface.im.taobao.com')!=-1){
					msg="<img src='"+msg+"' />"
				}
				h.push('<div class="u-icon"></div><div class="msg-wrap"><div class="msg-time">'+t(D[i].time)+'</div><div class="msg-con"><i></i><p class="inner-msg-con">'+msg+'</p></div></div></div>');
			}
		}
		$("#J_dialogCon").html(h.join(''));
		S.dialogScroll.refresh();
		S.dialogScroll.scrollTo(0, S.dialogScroll.maxScrollY);
	},
	openTxt:function(){
		S.dialogScroll = new window.IScroll("#J_con",{
        scrollX: !1,
        scrollY: !0,
        click: !0,
        mouseWheel: !0,
        scrollbars: !0
    });
		$('#J_inputWrap').html('<div class="input"><div><input id="msg" onblur="S.ck(this)"/></div><b id="btn" onclick="S.send()">发送</b></div>');
	},
	ck:function(e){
		var c=$.trim($(e).val());
		$(e).val(c);
		if(c){
			$("#btn").addClass('on');
		}else{
			$("#btn").removeClass('on');
		}
	},
	clearTxt:function(){
		$('#msg').val('');
		$("#btn").removeClass('on');
	},
	send:function(){
		var msg=$.trim($("#msg").val());
		if(!msg){return false;}
		sdk.Chat.sendMsgToCustomService({touid:S.touid,msg:msg,success:function(data){
				S.clearTxt();
				var o={t:2,msg:msg,time:new Date().getTime()}
				S.MSG.push(o);
				S.build();
			},
			error: function(error){
				console.log('send fail', error);
			}
		});
	}
};
S.uid=S.getArgs('uid');
S.appkey=S.getArgs('appkey');
S.credential=S.getArgs('credential');
S.touid=S.getArgs('touid');
S.init();
sdk.Base.login({uid:S.uid,appkey:S.appkey,credential:S.credential,timeout:4000,success:function(data){
		sdk.Base.startListenAllMsg();
		// S.getHistory();
		S.openTxt();
	},
	error:function(error){
		console.log('登录失败', error);
	}
});
sdk.Event.on('MSG_RECEIVED', function(data){
	var D=data.data.msgs;
	if(D){
		var i=0,o={};
		for(i;i<D.length;i++){
			S.MSG.push({t:1,msg:D[i].msg,time:D[i].time});
		}
		S.build();
	}
	//收到消息
});