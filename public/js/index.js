var socket = io();

socket.on('connect',()=>{
    console.log('connected to server');
});


socket.on('newMessage',(data)=>{
    console.log(`${data.from} says ${data.text}`);
    var li = jQuery('<li></li>');
    li.text(`${data.from}: ${data.text}`);

    jQuery('#messages').append(li);
});

/* socket.emit('createMessage',{
    from:'jackie',
    text:'hi'
},(data)=>{
    console.log('ack arrived at the client',data);
}) */

socket.on('disconnect',()=>{
    console.log('disconnected from server');
});

jQuery('#message-form').on('submit',(e)=>{
    e.preventDefault();

    socket.emit('createMessage',{
        from:'User',
        text:jQuery('[name=message]').val()
    },()=>{
    })
});

/* var locationButton = jQuery('#send-location');
locationButton.on('click',()=>{
    if(!navigator.geolocation){
        return alert('geolocation not supported by your browser');
    }
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);
    },()=>{
        alert('unable to fetch location');
    })
}) */