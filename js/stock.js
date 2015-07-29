CanvasRenderingContext2D.prototype.dashedLineTo = function (fromX, fromY, toX, toY, pattern) {  
  pattern = pattern === undefined ? 5 : pattern;
  var dx=(toX - fromX),dy=(toY - fromY);
  var distance = Math.floor(Math.sqrt(dx*dx + dy*dy));
  var dashlineInteveral = (pattern <= 0) ? distance : (distance/pattern);
  var deltay = (dy/distance) * pattern;
  var deltax = (dx/distance) * pattern;
  this.beginPath();
  for(var dl=0; dl<dashlineInteveral; dl++){
    if(dl%2){
      this.lineTo(fromX + dl*deltax, fromY + dl*deltay);
    } else {
      this.moveTo(fromX + dl*deltax, fromY + dl*deltay);
    }
  } 
  this.stroke();  
};
var M={
  time:function(x){
    var c=function(i){return (i<10)?"0"+i:i;},D=new Date(x);
    return D.getFullYear()+"-"+c(D.getMonth()+1)+"-"+c(D.getDate())+" "+c(D.getHours())+":"+c(D.getMinutes())+":"+c(D.getSeconds());
  },
  scroll:{
    cur:0,
    size:0,
    init:function(o){
      var k=$("#scroll").children('li'),h=[],i=0;
      this.size=k.size();
      k.css({left:"100%"});
      k.eq(0).css({"left":"0"});
      for(i;i<this.size;i++){
        h.push('<a></a>')
      }
      $("#scrollNav").html(h.join(''));
      $('#scrollNav a').eq(0).addClass('onn')
    },
    next:function(){
      var k=$("#scroll").children('li'),n,c;
      if(this.cur==(this.size-1)){
        c=this.cur;
        this.cur=0;
        n=0;
      }else{
        c=this.cur;
        n=c+1;
        this.cur++;
      }
      k.eq(c).css({'left':0}).stop().animate({"left":"-100%"},300);
      k.eq(n).css({'left':"100%"}).stop().animate({"left":"0"},300,function(){
      	$('#scrollNav a').removeClass('onn').eq(n).addClass('onn');
      });
    },
    prev:function(){
      var k=$("#scroll").children('li'),p,c;
      if(this.cur==0){
        c=0;
        p=this.size-1;
        this.cur=p;
      }else{
        c=this.cur;
        p=c-1;
        this.cur--;
      }
      k.eq(p).css({'left':'-100%'}).stop().animate({"left":0},300,function(){
      	$('#scrollNav a').removeClass('onn').eq(n).addClass('onn');
      });
      k.eq(c).css({'left':0}).stop().animate({"left":"100%"},300);
    },
    index:function(x){
      var k=$("#scroll").children('li'),n,c=this.cur;
      if(x!=this.cur){
        this.cur=x;
        k.eq(c).css({'left':0}).stop().animate({"left":"-100%"},300);
        k.eq(x).css({'left':"100%"}).stop().animate({"left":"0"},300);
      }
    }
  },
  pop:{
    share:function(){
      $('#share').toggleClass('show');
    },
    pop:function(){
      $('#sort').toggleClass('show');
    }
  },
  draw:{
    getH5DayK:function(data){
      var d=data;
      var DD=localStorage.getItem('k'),D={};
      if(DD!=null){D=eval("("+DD+")");}
      if(d){
        D[t]={data:d,time:new Date().getTime()};
        localStorage.setItem('k',JSON.stringify(D));
        M.draw.w2=d;
        M.draw.k();
      }
    },
    w1:[],
    getArr:function(i,a){
      var j= 0,arr=[],t;
      for(j;j< a.length;j++){
        t=Number(a[j].split(',')[i]);
        if(t){
          arr.push(t);
        }
      }
      return arr;
    },
    stock:function(){
      var windowWidth=$(window).width()//宽度
      ,canvasWidth=windowWidth*1.4
      ,canvasHeight=windowWidth*0.8//纵向单位
      ,canvasHeight2=windowWidth*0.4//纵向单位
      ,i,ctx=document.getElementById("canvas1").getContext('2d');
      /*1.绘制分时图*/
      $("#stockDraw1").css({"width":canvasWidth/2,"height":canvasHeight/2});
      $("#canvas1").attr({"width":canvasWidth+5,"height":canvasHeight+5}).css({"width":canvasWidth/2,"height":canvasHeight/2});
      var w1=this.w1;
      ctx.width=canvasWidth;
      ctx.height=canvasHeight;
      ctx.lineWidth=0;
      ctx.strokeStyle="rgb(125,125,125)";
      ctx.lineCap="square";
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0,canvasHeight);
      ctx.lineTo(canvasWidth,canvasHeight);
      ctx.lineTo(canvasWidth,0);
      ctx.lineTo(0,0);
      ctx.stroke();
      /*1.1绘制横向网格*/
      i=1;
      ctx.strokeStyle="rgb(125,125,125)";
      var d=canvasWidth/4;
      for(i;i<4;i++){
        ctx.dashedLineTo(d*i,0,d*i,canvasHeight,5);
      }
      /*1.2绘制纵向网格*/
      i=1;
      d=canvasHeight/4;
      for(i;i<4;i++){
        ctx.dashedLineTo(0,d*i,canvasWidth,i*d,5);
      }
      /*1.3准备绘制分数图数据（填充，分时图，日均）*/
      var w11= this.getArr(0,w1),w12=this.getArr(1,w1);
      var max=Math.max.apply(null,w11),min=Math.min.apply(null,w11),
        cc=max-min,
        kk=canvasHeight/cc,//纵向单位
        tt=canvasWidth/240;//横向单位
      var m1=Math.abs(min-this.closePrice),m2=Math.abs(max-this.closePrice),m3=this.max([m1,m2]),maxBFB,minBFB;
      if(min>this.closePrice){//涨
        min=this.closePrice-(max-this.closePrice);
        if(min<0){
          min=0;
        }
      }else if(max<this.closePrice){//跌
        max=this.closePrice+(this.closePrice-min);
      }else{
        if(m1>m2){//跌多涨少
          max=this.closePrice+(this.closePrice-min);
        }else{
          min=this.closePrice-(max-this.closePrice);
        }
      }
      cc=max-min;
      kk=canvasHeight/cc;
      maxBFB=((max-this.closePrice)/this.closePrice*100).toFixed(2)+"%";
      minBFB=((min-this.closePrice)/this.closePrice*100).toFixed(2)+"%";
      /*1.4开始绘制填充影音(暂注释)*/
      i=0;
      ctx.beginPath();
      ctx.fillStyle="rgba(100,100,100,0.3)";
      ctx.strokeStyle="rgb(100,100,100)";
      ctx.moveTo(i*tt,canvasHeight-(w11[i]-min)*kk);
      for(i;i<w11.length;i++){
        ctx.lineTo(i*tt,canvasHeight-(w11[i]-min)*kk);
      }
      ctx.lineTo((i-1)*tt,canvasHeight);
      ctx.lineTo(0,canvasHeight);
      ctx.lineTo(0,canvasHeight-(w11[0]-min)*kk);
      ctx.fill();
      /*1.5绘制分时图*/
      ctx.strokeStyle="#ffffff";
      ctx.moveTo(0,canvasHeight-(w11[0]-min)*kk);
      i=1;
      for(i;i<w11.length;i++){
        ctx.lineTo(i*tt,canvasHeight-(w11[i]-min)*kk);
      }
      ctx.stroke();
      /*1.6绘制昨收价*/
      ctx.beginPath();
      ctx.strokeStyle="#ffffff";
      ctx.moveTo(0,canvasHeight-(this.closePrice-min)*kk);
      ctx.lineTo(canvasWidth,canvasHeight-(this.closePrice-min)*kk);
      ctx.stroke();
      /*1.7绘制均线*/
      ctx.beginPath();
      ctx.strokeStyle="#ffff00";
      ctx.moveTo(0,canvasHeight-(w12[0]-min)*kk);
      i=1;
      for(i;i<w11.length;i++){
        ctx.lineTo(i*tt,canvasHeight-(w12[i]-min)*kk);
      }
      ctx.stroke();
      /*1.8绘制横坐标内容*/
      d=canvasWidth/4;
      ctx.font="20px Courier New";
      ctx.fillStyle = "#fff";
      ctx.fillText("09:30",0,canvasHeight);
      ctx.fillText("10:30",(d*1)-60/2,canvasHeight);
      ctx.fillText("11:30/13:00",(d*2)-130/2,canvasHeight);
      ctx.fillText("14:00",(d*3)-60/2,canvasHeight);
      ctx.fillText("15:00",(d*4)-60,canvasHeight);
      /*1.9绘制最高，最低价格*/
      ctx.font="26px Courier New";
      ctx.fillStyle = "#fff";
      ctx.fillText(max.toFixed(2),0,20);
      ctx.fillStyle = "#fff";
      ctx.fillText(min.toFixed(2),0,canvasHeight-25);
      ctx.fillText(maxBFB,canvasWidth-85,20);
      ctx.fillText(minBFB,canvasWidth-100,canvasHeight-25);
      /*绘制分时图部分全部完毕*/
      /*2.更新顶部数据*/

      if(this.isSuspense){
        $('#lastPrize').html('停牌');
        $('#lastWave').html('');
        $('#lastMsg').html('<p><label>今开:</label><span>-</span></p><p><label>最高:</label><span>-</span></p><p><label>昨收:</label><span>-</span></p><p><label>最低:</label><span>-</span></p>');
      }else{
        var n2=new Date().getTime(),wave,waveRatio;
        $('#lastPrize').html(this.lastPrice+'<i></i>');
        $('#lastPrize2').html(this.lastPrice);
        if(this.waveRatio>0){
          $('#stockTop').attr({"class":"up"});
          wave = "+"+this.wave;
          waveRatio = "+"+this.waveRatio+"%";
        }else{
          $('#stockTop').attr({"class":"down"});
          wave = this.wave;
          waveRatio = this.waveRatio+"%";
        }
        $('#wave').html(wave);
        $('#waveRatio').html(waveRatio);
        var zgClass=this.zg>this.lastPrice?"red":"green",zdClass=this.zd>this.lastPrice?"red":"green",jkClass=this.jk>this.zs?"red":"green";
        $('#lastMsg').html('<p><label>今开:</label><span class="'+jkClass+'">'+this.jk+'</span></p><p><label>最高:</label><span class="'+zgClass+'">'+this.zg+'</span></p><p><label>昨收:</label><span>'+this.zs+'</span></p><p><label>最低:</label><span class="'+zdClass+'">'+this.zd+'</span></p>');
      }
      /*3开始绘制交易量*/
      ctx=document.getElementById("canvas3").getContext('2d');
      $("#stockDraw3").css({"width":canvasWidth/2,"height":canvasHeight2/2});
      $("#canvas3").attr({"width":canvasWidth+5,"height":canvasHeight2+1}).css({"width":canvasWidth/2,"height":canvasHeight2/2});
      //w1=this.w1;
      ctx.width=canvasWidth;
      ctx.height=canvasHeight2;
      ctx.lineWidth=0;
      ctx.strokeStyle="rgb(125,125,125)";
      ctx.lineCap="square";
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0,canvasHeight2);
      ctx.lineTo(canvasWidth,canvasHeight2);
      ctx.lineTo(canvasWidth,0);
      ctx.lineTo(0,0);
      ctx.stroke();
      /*3.1绘制横向网格*/
      i=1;
      ctx.strokeStyle="rgb(125,125,125)";
      var d=canvasWidth/4;
      for(i;i<4;i++){
        ctx.dashedLineTo(d*i,0,d*i,canvasHeight2,5);
      }
      /*3.2绘制纵向网格*/
      i=1;
      d=canvasHeight2/2;
      for(i;i<2;i++){
        ctx.dashedLineTo(0,d*i,canvasWidth,i*d,5);
      }
      /*3.3准备绘制柱状数据*/
      var w12= this.getArr(3,w1);
      max=this.max(w12),min=this.min(w12),cc=max-min,kk=canvasHeight2/cc;
      /*3.4绘制柱状图*/
      i=0;
      ctx.lineWidth=2;
      for(i;i<w12.length;i++){
        ctx.beginPath();
        if(i==0){
          ctx.strokeStyle="red";
        }else{
          if(w11[i]>w11[i-1]){
            ctx.strokeStyle="red";
          }else{
            ctx.strokeStyle="green";
          }
        }
        ctx.moveTo(i*tt,canvasHeight2-((w12[i]-min)*kk));
        ctx.lineTo(i*tt,canvasHeight2);
        ctx.stroke();
      }
      function to10thousand(x){
        var v;
        if(x>10000){
          v=(x/10000).toFixed(0)+"万";
        }else{
          v=x;
        }
        return v;
      }
      var h=[];
      h.push('<ul><li><span><i>卖5</i> '+this.quote.sellPrice5+'</span><b>'+to10thousand(this.quote.sellAmount5)+'</b></li>');
      h.push('<li><span><i>卖4</i> '+this.quote.sellPrice4+'</span><b>'+to10thousand(this.quote.sellAmount4)+'</b></li>');
      h.push('<li><span><i>卖3</i> '+this.quote.sellPrice3+'</span><b>'+to10thousand(this.quote.sellAmount3)+'</b></li>');
      h.push('<li><span><i>卖2</i> '+this.quote.sellPrice2+'</span><b>'+to10thousand(this.quote.sellAmount2)+'</b></li>');
      h.push('<li><span><i>卖1</i> '+this.quote.sellPrice1+'</span><b>'+to10thousand(this.quote.sellAmount1)+'</b></li>');
      h.push('</ul><ul><li><span><i>买1</i> '+this.quote.buyPrice1+'</span><b>'+to10thousand(this.quote.buyAmount1)+'</b></li>');
      h.push('<li><span><i>买2</i> '+this.quote.buyPrice2+'</span><b>'+to10thousand(this.quote.buyAmount2)+'</b></li>');
      h.push('<li><span><i>买3</i> '+this.quote.buyPrice3+'</span><b>'+to10thousand(this.quote.buyAmount3)+'</b></li>');
      h.push('<li><span><i>买4</i> '+this.quote.buyPrice4+'</span><b>'+to10thousand(this.quote.buyAmount4)+'</b></li>');
      h.push('<li><span><i>买5</i> '+this.quote.buyPrice5+'</span><b>'+to10thousand(this.quote.buyAmount5)+'</b></li></ul>');
      $("#sD1").html(h.join(''));
    },
    max:function(arr){
      var i=0,max=0;
      for(i;i<arr.length;i++){
        if(arr[i] && arr[i]>max){
          max=arr[i];
        }
      }
      return max;
    },
    min:function(arr){
      var i=0,min=arr[0];
      for(i;i<arr.length;i++){
        if(arr[i] && arr[i]<min){
          min=arr[i];
        }
      }
      return min;
    },
    stock2:function(){
      var windowWidth=$(window).width()-10//宽度
      ,canvasWidth=windowWidth*2
      ,canvasHeight=windowWidth*0.8//纵向单位
      ,canvasHeight2=windowWidth*0.4//纵向单位
      ,i,ctx=document.getElementById("canvas1").getContext('2d');
      /*1.绘制分时图*/
      $("#stockDraw1").css({"width":canvasWidth/2,"height":canvasHeight/2});
      $("#canvas1").attr({"width":canvasWidth+5,"height":canvasHeight+5}).css({"width":canvasWidth/2,"height":canvasHeight/2});
      var w1=this.w1;
      ctx.width=canvasWidth;
      ctx.height=canvasHeight;
      ctx.lineWidth=0;
      ctx.strokeStyle="rgb(125,125,125)";
      ctx.lineCap="square";
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0,canvasHeight);
      ctx.lineTo(canvasWidth,canvasHeight);
      ctx.lineTo(canvasWidth,0);
      ctx.lineTo(0,0);
      ctx.stroke();
      /*1.1绘制横向网格*/
      i=1;
      ctx.strokeStyle="rgb(125,125,125)";
      var d=canvasWidth/4;
      for(i;i<4;i++){
        ctx.dashedLineTo(d*i,0,d*i,canvasHeight,5);
      }
      /*1.2绘制纵向网格*/
      i=1;
      d=canvasHeight/4;
      for(i;i<4;i++){
        ctx.dashedLineTo(0,d*i,canvasWidth,i*d,5);
      }
      /*1.3准备绘制分数图数据（填充，分时图，日均）*/
      var w11= this.getArr(0,w1),w12=this.getArr(1,w1);
      var max=Math.max.apply(null,w11),min=Math.min.apply(null,w11),
        cc=max-min,
        kk=canvasHeight/cc,//纵向单位
        tt=canvasWidth/240;//横向单位
      var m1=Math.abs(min-this.closePrice),m2=Math.abs(max-this.closePrice),m3=this.max([m1,m2]),maxBFB,minBFB;
      if(min>this.closePrice){//涨
        min=this.closePrice-(max-this.closePrice);
        if(min<0){
          min=0;
        }
      }else if(max<this.closePrice){//跌
        max=this.closePrice+(this.closePrice-min);
      }else{
        if(m1>m2){//跌多涨少
          max=this.closePrice+(this.closePrice-min);
        }else{
          min=this.closePrice-(max-this.closePrice);
        }
      }
      cc=max-min;
      kk=canvasHeight/cc;
      maxBFB=((max-this.closePrice)/this.closePrice*100).toFixed(2)+"%";
      minBFB=((min-this.closePrice)/this.closePrice*100).toFixed(2)+"%";
      /*1.4开始绘制填充影音(暂注释)*/
      i=0;
      ctx.beginPath();
      ctx.fillStyle="rgba(100,100,100,0.3)";
      ctx.strokeStyle="rgb(100,100,100)";
      ctx.moveTo(i*tt,canvasHeight-(w11[i]-min)*kk);
      for(i;i<w11.length;i++){
        ctx.lineTo(i*tt,canvasHeight-(w11[i]-min)*kk);
      }
      ctx.lineTo((i-1)*tt,canvasHeight);
      ctx.lineTo(0,canvasHeight);
      ctx.lineTo(0,canvasHeight-(w11[0]-min)*kk);
      ctx.fill();
      /*1.5绘制分时图*/
      ctx.strokeStyle="#ffffff";
      ctx.moveTo(0,canvasHeight-(w11[0]-min)*kk);
      i=1;
      for(i;i<w11.length;i++){
        ctx.lineTo(i*tt,canvasHeight-(w11[i]-min)*kk);
      }
      ctx.stroke();
      /*1.6绘制昨收价*/
      ctx.beginPath();
      ctx.strokeStyle="#ffffff";
      ctx.moveTo(0,canvasHeight-(this.closePrice-min)*kk);
      ctx.lineTo(canvasWidth,canvasHeight-(this.closePrice-min)*kk);
      ctx.stroke();
      /*1.7绘制均线*/
      ctx.beginPath();
      ctx.strokeStyle="#ffff00";
      ctx.moveTo(0,canvasHeight-(w12[0]-min)*kk);
      i=1;
      for(i;i<w11.length;i++){
        ctx.lineTo(i*tt,canvasHeight-(w12[i]-min)*kk);
      }
      ctx.stroke();
      /*1.8绘制横坐标内容*/
      d=canvasWidth/4;
      ctx.font="20px Courier New";
      ctx.fillStyle = "#fff";
      ctx.fillText("09:30",0,canvasHeight);
      ctx.fillText("10:30",(d*1)-60/2,canvasHeight);
      ctx.fillText("11:30/13:00",(d*2)-130/2,canvasHeight);
      ctx.fillText("14:00",(d*3)-60/2,canvasHeight);
      ctx.fillText("15:00",(d*4)-60,canvasHeight);
      /*1.9绘制最高，最低价格*/
      ctx.font="26px Courier New";
      ctx.fillStyle = "#fff";
      ctx.fillText(max.toFixed(2),0,20);
      ctx.fillStyle = "#fff";
      ctx.fillText(min.toFixed(2),0,canvasHeight-25);
      ctx.fillText(maxBFB,canvasWidth-85,20);
      ctx.fillText(minBFB,canvasWidth-100,canvasHeight-25);
      /*绘制分时图部分全部完毕*/
      /*2.更新顶部数据*/
      var n2=new Date().getTime(),wave,waveRatio;
      $('#lastPrize').html(this.lastPrice+'<i></i>');
      $('#lastPrize2').html(this.lastPrice);
      if(this.waveRatio>0){
        $('#stockTop').attr({"class":"up"});
        wave = "+"+this.wave;
        waveRatio = "+"+this.waveRatio+"%";
      }else{
        $('#stockTop').attr({"class":"down"});
        wave = this.wave;
        waveRatio = this.waveRatio+"%";
      }
      $('#wave').html(wave);
      $('#waveRatio').html(waveRatio);
      /*3开始绘制交易量*/
      ctx=document.getElementById("canvas3").getContext('2d');
      $("#stockDraw3").css({"width":canvasWidth/2,"height":canvasHeight2/2});
      $("#canvas3").attr({"width":canvasWidth+5,"height":canvasHeight2+1}).css({"width":canvasWidth/2,"height":canvasHeight2/2});
      //w1=this.w1;
      ctx.width=canvasWidth;
      ctx.height=canvasHeight2;
      ctx.lineWidth=0;
      ctx.strokeStyle="rgb(125,125,125)";
      ctx.lineCap="square";
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0,canvasHeight2);
      ctx.lineTo(canvasWidth,canvasHeight2);
      ctx.lineTo(canvasWidth,0);
      ctx.lineTo(0,0);
      ctx.stroke();
      /*3.1绘制横向网格*/
      i=1;
      ctx.strokeStyle="rgb(125,125,125)";
      var d=canvasWidth/4;
      for(i;i<4;i++){
        ctx.dashedLineTo(d*i,0,d*i,canvasHeight2,5);
      }
      /*3.2绘制纵向网格*/
      i=1;
      d=canvasHeight2/2;
      for(i;i<2;i++){
        ctx.dashedLineTo(0,d*i,canvasWidth,i*d,5);
      }
      /*3.3准备绘制柱状数据*/
      var w12= this.getArr(3,w1);
      max=this.max(w12),min=this.min(w12),cc=max-min,kk=canvasHeight2/cc;
      /*3.4绘制柱状图*/
      i=0;
      ctx.lineWidth=2;
      for(i;i<w12.length;i++){
        ctx.beginPath();
        if(i==0){
          ctx.strokeStyle="red";
        }else{
          if(w11[i]>w11[i-1]){
            ctx.strokeStyle="red";
          }else{
            ctx.strokeStyle="green";
          }
        }
        ctx.moveTo(i*tt,canvasHeight2-((w12[i]-min)*kk));
        ctx.lineTo(i*tt,canvasHeight2);
        ctx.stroke();
      }
      var h=[],cl=this.closePrice>this.quote.openPrice?'green':'red';
      h.push('<li><p><label>昨收:</label><span>'+this.closePrice+'</span></p><p><label>今开:</label><span class="'+cl+'">'+this.quote.openPrice+'</span></p></li>');
      h.push('<li><p><label>最高:</label><span class="red">'+this.quote.highPrice+'</span></p><p><label>最低:</label><span class="green">'+this.quote.lowPrice+'</span></p></li>');
      h.push('<li><p><label>成交量:</label><span>'+((this.quote.businessAmount/10000).toFixed(2))+'万手</span></p><p><label>成交额:</label><span>'+((this.quote.businessBalance/1000000000).toFixed(2))+'亿元</span></p></li>');
      // h.push('<li><p><label>量比:</label><span></span></p><p><label>沪市平盘:</label><span></span></p></li>');
      // h.push('<li><p><label>沪市上涨:</label><span></span></p><p><label>沪市下跌:</label><span></span></p></li>');
      $('#updateTime').html(M.time(this.quote.updateTime));
      $('#stock2b').html(h.join(''));
    },
    w2:null,
    k:function(){
      var windowWidth=$(window).width()-10//宽度
        ,canvasWidth=windowWidth*2//横向单位
        ,canvasHeight=windowWidth*1//纵向单位
        ,n=this.w2.data.length
        ,d=windowWidth/n//宽度单位
        ,i
        ,ctx=document.getElementById("canvas2").getContext('2d');
      $("#stockDraw2").css({"width":canvasWidth/2,"height":canvasHeight/2});
      $("#canvas2").attr({"width":canvasWidth,"height":canvasHeight+5}).css({"width":canvasWidth/2,"height":canvasHeight/2});
      /*1绘制K线图*/
      //1.1绘制框
      ctx.height=canvasWidth;
      ctx.width=canvasHeight;
      ctx.lineWidth=0;
      ctx.strokeStyle="rgb(125,125,125)";
      ctx.lineCap="square";
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0,canvasHeight);
      ctx.lineTo(canvasWidth,canvasHeight);
      ctx.lineTo(canvasWidth,0);
      ctx.lineTo(0,0);
      ctx.stroke();
      //1.2构造K线数据
      var D=this.w2.data,i=0,R=[],T=[];
      for(i;i<D.length;i++){
        R.push(D[i].split(',')[0]);
        R.push(D[i].split(',')[1]);
        R.push(D[i].split(',')[2]);
        R.push(D[i].split(',')[3]);
        T.push(D[i].split(',')[4]+','+D[i].split(',')[5]);
      }
      //1.3绘制纵向网格
      i=1;
      var len=canvasHeight/4;
      ctx.strokeStyle="rgba(255,255,255,.4)";
      for(i;i<4;i++){
        ctx.dashedLineTo(0,len*i,canvasWidth,i*len,5);
      }
      var max=Math.max.apply(null,R)
        ,min=Math.min.apply(null,R)
        ,kk=canvasHeight/(max-min)//纵向单位
        ,A;
      //1.4绘制K线
      i=0;
      for(i;i<D.length;i++){
        A=D[i].split(',');
        ctx.lineWidth=1;
        ctx.beginPath();
        if(A[0]>A[1]){
          ctx.strokeStyle="green";
        }else if(A[0]==A[1]){
          ctx.strokeStyle="#fff";
        }else{
          ctx.strokeStyle="#f00";
        }
        ctx.moveTo((i*d*2)+d,canvasHeight-(A[2]-min)*kk);
        ctx.lineTo((i*d*2)+d,canvasHeight-(A[3]-min)*kk);
        ctx.stroke();
        ctx.lineWidth=2;
        ctx.beginPath();
        if(A[0]==A[1]){
          ctx.lineWidth=1;
          ctx.moveTo((i*d*2)+d-4,canvasHeight-(A[1]-min)*kk);
          ctx.lineTo((i*d*2)+d+4,canvasHeight-(A[0]-min)*kk);
        }else{
          ctx.lineWidth=8;
          ctx.moveTo((i*d*2)+d,canvasHeight-(A[1]-min)*kk);
          ctx.lineTo((i*d*2)+d,canvasHeight-(A[0]-min)*kk);
        }
        ctx.stroke();
      }
      //1.5绘制底部日期数据
      ctx.font="20px Courier New";
      ctx.fillStyle="#fff";
      ctx.fillText(this.w2.days[0],0,canvasHeight);
      ctx.fillText(this.w2.days[Math.floor(this.w2.days.length/2)],canvasWidth/2-30,canvasHeight);
      ctx.fillText(this.w2.days[this.w2.days.length-1],(canvasWidth)-60,canvasHeight);
      /*2开始绘制交易量*/
      var canvasHeight2=windowWidth*0.3;
      ctx=document.getElementById("canvas4").getContext('2d');
      $("#stockDraw4").css({"width":canvasWidth/2,"height":canvasHeight2/2});
      $("#canvas4").attr({"width":canvasWidth,"height":canvasHeight2+1}).css({"width":canvasWidth/2,"height":canvasHeight2/2});
      var w1=this.w1;
      ctx.width=canvasWidth;
      ctx.height=canvasHeight2;
      ctx.lineWidth=0;
      ctx.strokeStyle="rgb(125,125,125)";
      ctx.lineCap="square";
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0,canvasHeight2);
      ctx.lineTo(canvasWidth,canvasHeight2);
      ctx.lineTo(canvasWidth,0);
      ctx.lineTo(0,0);
      ctx.stroke();
      /*3.1绘制横向网格*/
      i=1;
      ctx.strokeStyle="rgb(125,125,125)";
      var d=canvasWidth/4;
      for(i;i<4;i++){
        ctx.dashedLineTo(d*i,0,d*i,canvasHeight2,5);
      }
      /*3.2绘制纵向网格*/
      i=1;
      d=canvasHeight2/2;
      for(i;i<2;i++){
        ctx.dashedLineTo(0,d*i,canvasWidth,i*d,5);
      }
      /*3.3准备绘制柱状数据*/
      var w12=this.getArr(0,T);
      max=this.max(w12);
      min=this.min(w12);
      var tt=canvasWidth/D.length,
        cc=max-min,
        kk=canvasHeight2/cc;

      ctx.lineWidth=8;
      /*3.4绘制柱状图*/
      i=0;
      for(i;i<w12.length;i++){
        ctx.beginPath();
        A=D[i].split(',');
        if(A[0]>A[1]){
          ctx.strokeStyle="green";
        }else if(A[0]==A[1]){
          ctx.strokeStyle="#fff";
        }else{
          ctx.strokeStyle="#f00";
        }
        ctx.moveTo(i*tt+windowWidth/n,canvasHeight2-((w12[i]-min)*kk));
        ctx.lineTo(i*tt+windowWidth/n,canvasHeight2);
        ctx.stroke();
      }
    }
  }
}
function orientationChange(){
  if(window.orientation){
     if($("#canvas2")&&$("#canvas")){
      setTimeout(function(){
        M.draw.stock();
        M.draw.k();
      },200);
    }
  }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);
var touch = {
  tX : [],
  touchStart : function(a) {
    this.tX.push(a.touches[0].pageX);
  },
  touchMove : function(c) {
    this.tX.push(c.touches[0].pageX);
    //c.preventDefault();
  },
  touchEnd : function() {
    if (this.tX[0] - this.tX[this.tX.length - 1] > 20) {
      scroll.right();
    }else if ( this.tX[this.tX.length - 1] - this.tX[0] > 20){
      scroll.left();
    }
    this.tX = [];
  }
},scroll={
  i:0,
  n:1,
  t:null,
  lock:false,
  left:function(){
    if(this.lock){return false;}
    this.lock=true;
    if(this.i>0){
      this.i--;
    }
    var d=$('#banner li').eq(-1).clone();
    $('#banner').prepend(d).css({'margin-left':'-100vw'});
    $('#banner').animate({'margin-left':'0'},300,function(){
      $('#banner li').eq(-1).remove();
      $("#banners p i").removeClass('cur');
      $("#banners p i").eq(scroll.i).addClass('cur');
      scroll.lock=false;
    });
  },
  right:function(){
    if(this.lock){return false;}
    this.lock=true;
    if(this.i<this.n-1){
      this.i++;
    }else{
      this.i=0;
    }
    var d=$('#banner li').eq(0).clone();
    $('#banner li').eq(0).animate({'margin-left':'-100vw'},500,function(){
      $(this).remove();
      $('#banner').append(d);
      $("#banners p i").removeClass('cur');
      $("#banners p i").eq(scroll.i).addClass('cur');
      scroll.lock=false;
    });
  }
};
