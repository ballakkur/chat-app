var socket = io();

socket.on('connect',()=>{
    console.log('connected to server');
});


socket.on('newMessage',(data)=>{
    console.log(`${data.from} says ${data.text}`);
});

socket.on('disconnect',()=>{
    console.log('disconnected from server');
});