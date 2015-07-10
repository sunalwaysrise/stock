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
    w1:[],
    stock:function(){
      var w=$(window).width()
      ,d=(w-20)/240
      ,c=w-d*240,i=0,ctx=document.getElementById("canvas1").getContext('2d');
      $("#stockDraw1").css({"width":w,"height":(d*240)+20});
      $("#canvas1").attr({"width":w*2,"height":(d*480)+40}).css({"width":w,"height":(d*240)+20});
      var w1=this.w1;
      ctx.height=(d*480)+40;
      ctx.width=w*2;
      ctx.lineWidth=0;
      ctx.strokeStyle="#fff";
      ctx.lineCap="square";
      len=w1.length;
      ctx.beginPath();
      ctx.moveTo(c,0);
      ctx.lineTo(c,480*d);
      ctx.lineTo(c+480*d,480*d);
      ctx.lineTo(c+480*d,0);
      ctx.lineTo(c,0);
      ctx.stroke();
      i=1;
      ctx.strokeStyle="rgba(255,255,255,.4)";
      for(i;i<4;i++){
        ctx.dashedLineTo(c+(d*120*i),0, c+(d*120*i),480*d,5);  
      }
      ctx.font="20px Courier New";
      ctx.fillStyle = "#fff";
      ctx.fillText("09:30",c,480*d+20);
      ctx.fillText("10:30",c+(d*120*1)-60/2,480*d+20);
      ctx.fillText("11:30/13:00",c+(d*120*2)-130/2,480*d+20);
      ctx.fillText("14:00",c+(d*120*3)-60/2,480*d+20);
      ctx.fillText("15:00",c+(d*120*4)-60,480*d+20);
      i=1;
      for(i;i<8;i++){
        ctx.dashedLineTo(c,i*d*60,c+(d*480),i*d*60,5);
      }
      i=1;
      var max=Math.max.apply(null,w1),min=Math.min.apply(null,w1),cc=max-min,kk=(d*480)/cc;
      ctx.font="26px Courier New";
      ctx.fillStyle = "#fff";
      ctx.fillText(max,c+(d*120*4)-120,45);
      ctx.fillStyle = "#fff";
      ctx.fillText(min,c+(d*120*4)-120,8*d*60-25);
      ctx.beginPath();
      ctx.strokeStyle="rgb(65,175,255)";
      ctx.moveTo(c,d*480-(w1[0]-min)*kk);
      for(i;i<w1.length;i++){
        ctx.lineTo(c+(i*d*2),d*480-(w1[i]-min)*kk);
      }
      ctx.stroke();
      var n2=new Date().getTime();
    },
    w2:null,
    k:function(){
      var w=$(window).width(),n=this.w2.data.length
      ,d=(w-20)/n
      ,c=w-d*n,i=0,ctx=document.getElementById("canvas2").getContext('2d');
      $("#stockDraw2").css({"width":w,"height":(d*n)+20});
      $("#canvas2").attr({"width":w*2,"height":(d*n*2)+40}).css({"width":w,"height":(d*n)+20});
      ctx.height=(d*n*2)+40;
      ctx.width=w*2;
      ctx.lineWidth=0;
      ctx.strokeStyle="#fff";
      ctx.lineCap="square";
      ctx.beginPath();
      ctx.moveTo(c,0);
      ctx.lineTo(c,n*2*d);
      ctx.lineTo(c+n*2*d,n*2*d);
      ctx.lineTo(c+n*2*d,0);
      ctx.lineTo(c,0);
      ctx.stroke();
      var D=this.w2.data,i=0,R=[];
      for(i;i<D.length;i++){
        R.push(D[i].split(',')[0]);
        R.push(D[i].split(',')[1]);
        R.push(D[i].split(',')[2]);
        R.push(D[i].split(',')[3]);
      }
      i=1;
      ctx.strokeStyle="rgba(255,255,255,.4)";
      for(i;i<8;i++){
        ctx.dashedLineTo(c,(d*n*2)/8*i,c+(d*n*2),(d*n*2)/8*i,5);
      }
      var max=Math.max.apply(null,R),min=Math.min.apply(null,R),cc=max-min,kk=(d*D.length*2)/cc,A;
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
        ctx.moveTo(c+(i*d*2)+d,d*n*2-(A[2]-min)*kk);
        ctx.lineTo(c+(i*d*2)+d,d*n*2-(A[3]-min)*kk);
        ctx.stroke();
        ctx.lineWidth=8;
        ctx.beginPath();
        if(A[0]==A[1]){
          ctx.lineWidth=1;
          ctx.moveTo(c+(i*d*2)+d-4,d*n*2-(A[1]-min)*kk);
          ctx.lineTo(c+(i*d*2)+d+4,d*n*2-(A[0]-min)*kk);
        }else{
          ctx.lineWidth=8;
          ctx.moveTo(c+(i*d*2)+d,d*n*2-(A[1]-min)*kk);
          ctx.lineTo(c+(i*d*2)+d,d*n*2-(A[0]-min)*kk);
        }
        ctx.stroke();
      }
      ctx.font="20px Courier New";
      ctx.fillStyle="#fff";
      ctx.fillText(this.w2.days[0],c,n*2*d+20);
      ctx.fillText(this.w2.days[Math.floor(this.w2.days.length/2)],(c+(d*n*2))/2-30,n*2*d+20);
      ctx.fillText(this.w2.days[this.w2.days.length-1],c+(d*n*2)-60,n*2*d+20);
    }
  }
}
$(window).bind("orientationchange",function(event){
  if($("#canvas2")&&$("#canvas")){
    M.draw.stock();
    M.draw.k();
  }
});
