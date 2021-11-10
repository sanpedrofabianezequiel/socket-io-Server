// Servidor de express
const app = require('express')();
//Servidor de sockets
const server = require('http').createServer(app);
//Configuration del sockets server
const io = require('socket.io')(server);

io.on('connection', () => { /* … */ });

server.listen(8080,()=>{
    console.log('Server corriendo en el puerto: 8080')
});
