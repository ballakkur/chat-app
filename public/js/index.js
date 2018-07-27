var socket = io();

socket.on('connect',()=>{
    console.log('connected to server');
    socket.emit('createMessage',{
        from:'me',
        text:'hello there'
    });
});

socket.on('disconnect',()=>{
    console.log('disconnected from server');
});

socket.on('newMessage',(data)=>{
    console.log('new message');
    console.log(`${data.from} say ${data.text}`);
});