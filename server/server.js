const path = require('path');

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

socket.on('createMessage',(message)=>{
    console.log(message);
    io.emit('newMessage',{
        from:message.from,
        text:message.text,
        createdAt:new Date().getTime()
    });
})

socket.on('disconnect',()=>{
    console.log('user was disconnected');
})

});

server.listen(3000,()=>{
console.log('server running in port',port);
})