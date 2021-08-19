// INSTANCIANDO EL SERVIDOR QUE PERMITE GENERAR EL OBJETO QUE SE MOSTRARA EN LOCAL HOST

import Server from './class/server';
import userRoutes from './routes/usuarios';
import mongoConnection from './bin/mongoConnection';
import bodyParser from 'body-parser';//prepara la app para las peticiones, que tipo de datos recibirá
import postRouter from './routes/post';
import fileUpload from 'express-fileupload';
import FileSystem from './class/file-system';
import express from 'express';
import cors from 'cors';
import tradeRoutes from './routes/oficios';



const server = new Server();

server.start(()=>{
    console.log(`servidor corriendo en puerto ${server.port} y en host ${server.host}`);
});

//body parser
server.app.use(express.urlencoded({ extended: false })); 
server.app.use(express.json()); 

//validarUpload -> revisa las carpetas si estan creadas la ignora sino las crea automaticamente
const filesystem = new FileSystem();
filesystem.validarPathUpload();

//fileUpload
server.app.use(fileUpload());

//cors
server.app.use(cors());

//RUTAS DE LA APP

server.app.use('/users', userRoutes);
server.app.use('/post', postRouter );
server.app.use('/trades', tradeRoutes);


//conexion MongoDB


mongoConnection
