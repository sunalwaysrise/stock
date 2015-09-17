var services = angular.module('services', []);
services.factory('nav',function(){
	var k={
		up:function(){
			D.L.addClass('show');
		},
		down:function(){
			D.L.removeClass('show');
		}
	};
	return k;
}).factory('mySocket', function($websocket) {
  var dataStream = $websocket('ws://192.168.1.114:8080/quote?userId=1001');
  var collection = [];
  dataStream.onMessage(function(message) {
    collection.push(JSON.parse(message.data));
  });
  var methods = {
    collection: collection,
    get: function() {
      dataStream.send(JSON.stringify({ action: 'get' }));
    }
  };
  return methods;
}).factory('holidayDatas', ['$http', function($http){
  return {
    check:function(){
      var HolidayDatas=localStorage.getItem('HolidayDatas'),tf=true;
      if(HolidayDatas){
        HolidayDatas=eval("("+HolidayDatas+")");
        if(HolidayDatas.year==new Date().getFullYear()){
          tf=false;
        }
      }else{
        tf=false;
      }
      return tf;
    },
    set:function(){
      $http.get(stock.data.stock+'getHolidayDatas',{params:V}).success(function(d){
        var d=JSON.stringify(d.holidayVO);
        localStorage.setItem('HolidayDatas',d);
      });
    },
    get:function(){
      var HolidayDatas=localStorage.getItem('HolidayDatas');
      return eval("("+HolidayDatas+")");
    }
  }
}]).factory("fave",['$http',function($http){
  return {
    add:function(i,v){
      var p={version:V.version,requestType:V.requestType,stockCode:v,exchangeType:i};
      var d=this.get();
      d.push({stockCode:v,exchangeType:i});
      this.set(d);
      $http.get(stock.data.stock+'user/core/addMyOptionalStock',{params:p}).success(function(d){
        /*console.log(d);*/
      });
    },
    remove:function(i,v){
      var p={version:V.version,requestType:V.requestType,stockCode:v,exchangeType:i};
      var d=this.get(),j=0;
      for(j;j<d.length;j++){
        if( d[j].stockCode==v && d[j].exchangeType==i ){
          d.splice(j,1);
        }
      }
      this.set(d);
      $http.get(stock.data.stock+'user/core/removeMyOptionalStock',{params:p}).success(function(d){
        /*console.log(d);*/
      });
    },
    get:function(){
      var d=localStorage.getItem('local');
      if(d){
        return eval("("+d+")");
      }else{
        return [];
      }
    },
    set:function(d){
      localStorage.setItem('local',JSON.stringify(d));
    }
  };
}]).factory('banks', function(){
  return ['中国工商银行','中国农业银行','中国建设银行','中国银行','中国交通银行','兴业银行','中信银行','中国光大银行','中国邮政储蓄银行','浦东发展银行'];
}).factory('citys', function(){
  return {
    provinces:["河北", "海南", "江西", "四川", "山西", "陕西", "广西", "浙江", "河南", "上海", "新疆", "北京", "江苏", "安徽", "黑龙江", "天津", "湖北", "云南", "湖南", "辽宁", "广东", "福建", "山东", "甘肃", "内蒙古", "吉林", "青海", "贵州", "重庆", "宁夏", "西藏"],
    city:{
      "河北":["张家口市","廊坊市","保定市","唐山市","沧州市","石家庄市","邯郸市","承德市","邢台市","衡水市","秦皇岛市"],"海南":["海口市","三亚市"],"江西":["吉安市","上饶市","宜春市","九江市","南昌市","赣州市","抚州市","萍乡市","景德镇市","鹰谭市","新余市"],"四川":["达州市","绵阳市","乐山市","德阳市","成都市","内江市","宜宾市","眉山市","阿坝州","南充市","凉山州","广元市","雅安市","泸州市","甘孜州","广安市","巴中市","资阳市","遂宁市","攀枝花市","自贡市"],"山西":["运城市","晋中市","太原市","忻州市","长治市","吕梁市","大同市","晋城市","阳泉市","临汾市","朔州市"],"陕西":["咸阳市","宝鸡市","榆林市","渭南市","西安市","商洛市","汉中市","延安市","安康市","铜川市"],"广西":["柳州市","防城港市","南宁市","桂林市","河池市","钦州市","玉林市","北海市","来宾市","梧州市","贺州市","百色市","贵港市","崇左市"],"浙江":["台州市","宁波市","温州市","丽水市","金华市","嘉兴市","杭州市","湖州市","绍兴市","舟山市","衢州市"],"河南":["三门峡市","安阳市","开封市","新乡市","洛阳市","许昌市","郑州市","驻马店市","南阳市","平顶山市","焦作市","漯河市","商丘市","周口市","鹤壁市","濮阳市","信阳市"],"上海":["上海市"],"新疆":["乌鲁木齐市","喀什地区","昌吉回族自治州","阿克苏地区","巴音郭楞蒙古自治州","伊犁哈萨克自治州","克孜勒苏柯尔克孜自治州","石河子市","塔城地区","和田地区","哈密地区","克拉玛依市","博尔塔拉蒙古自治州","阿勒泰地区","吐鲁番地区"],"北京":["北京市"],"江苏":["南京市","南通市","无锡市","苏州市","镇江市","宿迁市","常州市","徐州市","扬州市","泰州市","淮安市","盐城市","连云港市"],"安徽":["合肥市","淮南市","安庆市","马鞍山市","芜湖市","蚌埠市","铜陵市","滁州市","池州市","阜阳市","亳州市","黄山市","六安市","巢湖市","宣城市","宿州市","淮北市"],"黑龙江":["哈尔滨市","大庆市","七台河市","伊春市","佳木斯市","大兴安岭地区","双鸭山市","牡丹江市","黑河市","鹤岗市","绥化市","鸡西市","齐齐哈尔市"],"天津":["天津市"],"湖北":["宜昌市","武汉市","荆州市","襄樊市","鄂州市","黄石市","黄冈市","十堰市","孝感市","荆门市","恩施州","咸宁市","随州市"],"云南":["昆明市","曲靖市","玉溪市","临沧市","保山市","丽江市","思茅市","昭通市"],"湖南":["株州市","湘潭市","郴州市","长沙市","永州市","衡阳市","吉首市","娄底市","益阳市","岳阳市","常德市","张家界市","邵阳市","怀化市"],"辽宁":["沈阳市","丹东市","大连市","本溪市","营口市","葫芦岛市","辽阳市","鞍山市","抚顺市","锦州市","盘锦市","铁岭市","阜新市","朝阳市"],"广东":["深圳市","东莞市","佛山市","广州市","中山市","惠州市","珠海市","江门市","湛江市","肇庆市","河源市","汕头市","梅州市","云浮市","清远市","茂名市","揭阳市","汕尾市","韶关市","潮州市","阳江市"],"福建":["福州市","厦门市","泉州市","漳州市","龙岩市","莆田市","三明市","南平市","宁德市"],"山东":["东营市","临沂市","威海市","济南市","济宁市","淄博市","潍坊市","烟台市","聊城市","青岛市","菏泽市","泰安市","德州市","日照市","滨州市","枣庄市","莱芜市"],"甘肃":["兰州市","陇南市","平凉市","定西市","庆阳市","临夏州","张掖市","甘南州","白银市","武威市","嘉峪关市","天水市","酒泉市","金昌市"],"内蒙古":["包头市","呼伦贝尔市","呼和浩特市","鄂尔多斯市","锡林郭勒盟","乌兰察布市","兴安盟","巴彦淖尔市","乌海市","赤峰市","通辽市","阿拉善盟"],"吉林":["吉林市","长春市","辽源市","白城市","白山市","通化市","四平市","松原市","延边州"],"青海":["西宁市","海东地区","果洛藏族自治州","海北藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州","海南藏族自治州","黄南藏族自治州"],"贵州":["贵阳市","遵义市","六盘水市","安顺市"],"重庆":["重庆市","涪陵市","万州市","黔江市"],"宁夏":["吴忠市","银川市","中卫市","固原市","石嘴山市"],"西藏":["拉萨市"]
    }
  }
}).factory('unread',function(){
  var u=sessionStorage.getItem('unread'),k=false;
  if(u){
    u=eval("("+u+")");
    for(i in u){
      if(u[i]){
        k=u[i];
        break;
      }
    }
  }
  return {k:k,u:u};
});
