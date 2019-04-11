// var http = require('http');
 
// // 用于请求的选项
// var options = {
//    host: 'localhost',
//    port: '8080',
//    path: '/index.html'  
// };
 
// // 处理响应的回调函数
// var callback = function(response){
//    // 不断更新数据
//    var body = '';
//    response.on('data', function(data) {
//       body += data;
//    });
   
//    response.on('end', function() {
//       // 数据接收完成
//       console.log(body);
//    });
// }
// // 向服务端发送请求
var req = http.request(options, callback);
req.end();

define(['jquery','socketIo'],function(jq,io){

    var sendNode = jq('.j-send');
    var btnNode = jq('.j-btn');
    var contentNode = jq('.j-content');
    //建立连接
    var ws = require('websocket.io')
  , server = new ws.Server()

// … somewhere in your http server code 
server.on('upgrade', function (req, socket, head) {
  server.handleUpgrade(req, socket, head);
});
    socket = io.connect('ws://127.0.0.1:8080');

    btnNode.on('click',function(){
        var sendText = sendNode.val();
        //向服务端发送信息
        socket.emit("message", {msg:sendText});

    });
    //接收服务端推送的信息
    socket.on("message", function(obj) {
        var curContent = contentNode.html();
        contentNode.html(curContent+obj.msg);
    });
});
