
// 
var express = require('express'), //引入express模块
    app = express(),
    server = require('http').createServer(app);
    io = require('socket.io').listen(server),
    users = [];
app.use('/', express.static(__dirname + '/www')); //指定静态HTML文件的位置

server.listen(3000);
console.log('server started');

//socket部分
io.on('connection', function(socket) {

	socket.on('login', function(nickname) {
        if (users.indexOf(nickname) > -1) {
            // socket.emit('nickExisted');
        } else {
            //socket.userIndex = users.length;
            socket.nickname = nickname;
            users.push(nickname);
            console.log(users)
            socket.emit('loginSuccess');
            // io.sockets.emit('system', nickname, users.length, 'login');
        };
    });
    //接收并处理客户端发送的postMsg事件
    socket.on('postMsg', function(data) {
        //将消息输出到控制台
        //console.log(data);
        socket.broadcast.emit('newMsg', socket.nickname, data);
    })
});
