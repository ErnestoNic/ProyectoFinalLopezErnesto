import mongoose from 'mongoose';
import variables_entorno from '../config';

//SERVICIO QUE PERMITE CREACION DE LA BASE DE DATOS Y CONEXION CON MONGO
const mongoConnection = mongoose.connect(variables_entorno.MONGODB, //ruta donde se aloja la BD -> el nombre que tendrá es appCursoAvanzado
{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true},
(error)=>{
    if(error){
        throw error
    }else{
        console.log("conectado a base de datos Mongo");
    }
}
)

export default mongoConnection;

