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

socket.emit('newMessage',{
    from:'mosh',
    text:'hello',
    createdAt:123
});

socket.on('createMessage',(message)=>{
    console.log(message);
})

socket.on('disconnect',()=>{
    console.log('user was disconnected');
})

});

server.listen(3000,()=>{
console.log('server running in port',port);
})