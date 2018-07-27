const path = require('path');

const message = require('./utils/message');

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname,'../public');

//heroku
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
var io = socketIO(server);
 
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
console.log('user connected');

//wlecome message for new user
socket.emit('newMessage',message.generateMessage('admin','welcome to chatapp'))
socket.broadcast.emit('newMessage',message.generateMessage('admin','new user joined'));

socket.on('createMessage',(data,callback)=>{
    console.log(data);
    io.emit('newMessage',message.generateMessage(data.from,data.text));
    callback('this is from the server');
    /* socket.broadcast.emit('newMessage',{
        from:message.from,
        text:message.text,
        createdAt:new Date().getTime()
    }) */
})

socket.on('disconnect',()=>{
    console.log('user was disconnected');
})

});

server.listen(3000,()=>{
console.log('server running in port',port);
})