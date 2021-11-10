// Servidor de express
const express = require('express');
const app = express();
//Servidor de sockets
const server = require('http').createServer(app);
//Configuration del sockets server
const io = require('socket.io')(server);

app.use( express.static( __dirname + '/public') );


io.on('connection', (socket) => {
    socket.emit('mensaje-bienvenida',{
        msg:'Bienvenido al server',
        fecha:new Date()
    });

    socket.on('mensaje-to-server',(data)=>{
        console.log(data);
        io.emit('mensaje-from-server',data)
    })
});

server.listen(8080,()=>{
    console.log('Server corriendo en el puerto: 8080')
});
