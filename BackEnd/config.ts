import dotenv from 'dotenv';
import path from 'path';

//desde donde sacaré los valores de las variables 
dotenv.config({
    path: path.resolve(__dirname, "../env/"+process.env.NODE_ENV+'.env')
})

let variables_entorno:any ={//DECLARACION DE NUESTRAS VARIABLES DE ENTORNO Y SUS DEFAULT
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST ||'localhost',
    PORT: process.env.PORT || '3000',
    MONGODB: process.env.MONGODB || '/mongodb://localhost:27017/appCursoAvanzado'

};

export default variables_entorno;


