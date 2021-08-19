import {Schema, model, Document, now} from 'mongoose'; //clase de mongose que permite aplicar metodos para interactuar con BD mondoDB
import bcrypt from 'bcrypt';

//SERVICIO QUE PERMITE CREACION DE LA TABLA Y SUS ATRIBUTOS
const usuarioSchema = new Schema<Iusuario>({
nombre:{
    type:String, //tipo de variable como en mysql es varchar, float, etc
    required:[true, 'El nombre es necesario']
},
avatar:{
    type:String,
    default: 'av-1.png'//imagen por defecto si no carga una propia
},
email:{
    type:String,
    unique:true, //como en Mysql cuando tildas unique para que no se repita con otros usuarios
    lowercase:true,
    required:[true, 'El email es necesario']
},
password:{
    type:String,
    required:[true, 'El password es un valor requerido'],
    
    
},  
signUpDate: { 
    type: Date, 
    default: Date.now()
},





});

//comparacion de password para validaciones

usuarioSchema.method('compararPassword', function(password:string=""):boolean{ 
    /*El metodo compara si el password que me manda el front coincide con el password almacenado en la base de datos. Si son iguales es true, sino false... las comillas por si viene vacio el password*/
    if(bcrypt.compareSync(password, this.password)){//para sacar este error hay que modificar linea 34 del tsconfig por false
        return true;
    }else{
        return false;
    }
})


//interfaces
interface Iusuario extends Document {//define los atributos permitidos para las tablas
    nombre: string,
    email: string,
    avatar: string,
    password: string,
    

    compararPassword(password:string):boolean //asi puede exportarse para usarse en el modelo
};

export const Usuario = model<Iusuario>('Usuario', usuarioSchema); // exporta el modelo para crear una base de dato con el schema que permite su utlizacion en toda la base: crear, insertar, eliminar, etc