
var ws = require('./node_modules/ws').Server; 
var cons = new Array();
var server = new ws({
    host: "127.0.0.1",
    port: 8080
}); 
server.on('connection', function (ws) {
    console.log('new connection founded successfully');
    cons.push(ws); // 每当建立一个连接成功后，就将这个连接加入到数组中
    ws.on('message', function (data) { 
        console.log(JSON.parse(data))
          for (var i = 0; i < cons.length; i++) {
                cons[i].send(data);
                console.log("接收到数据：" + data);
            }
    });
    ws.on('close', function () { //当关闭一个连接时的处理
        for (var i = 0; i < cons.length; i++) {
            if (cons[i] == ws) cons.splice(i, 1);
        }
    });
});