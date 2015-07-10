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
});
