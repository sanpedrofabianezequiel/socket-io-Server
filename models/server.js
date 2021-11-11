// Servidor de express
const express = require('express');
//Servidor de sockets
const http    = require('http');
//Configuration del sockets server
const socketio= require('socket.io');
//Path Public Index
const path    =  require('path');

const  Sockets=  require('./sockets');

class Server {

    constructor(){
        this.app    = express();
        this.port   = 8080;
        this.server = http.createServer(this.app);
        this.io     = socketio(this.server,{/*Configurationes */});
    }

    middlewares(){
        //Deploy directory public
        this.app.use( express.static(  path.resolve( __dirname ,'../public')) );
    }

    configurarSockets(){
        new Sockets(this.io);
    }

    execute(){
        //Inicializar Middlewares
        this.middlewares();
        
        //Inicializar Sockets
        this.configurarSockets();


        this.server.listen(this.port,()=>{
            console.log('Server corriendo en el puerto: ' + this.port);
        });

    }
}

module.exports = Server;