import jwt from 'jsonwebtoken';
import variables_entorno from '../config';
//SERVICIO QUE CREA EL TOKEN PARA ALMACENAR EN NAVEGADOR Y VALIDAR USUARIO
/*Trabajar con Static */

export default class Token{
    /*atributos*/
    static seed:string="este-es-el-seed";/*debe ser privado y oculto porque sino puede replicar el token*/
    static caducidad:string= "30d";

    constructor(){

    }
/*metodo que obtiene el TOKEN en el LOGIN*/
static getJwtToken(paylod:any):string{ /*paylod es la info que necesitamos de la encriptacion por ejemplo el ID del usuario*/
    return jwt.sign({
        usuario:paylod
    }, this.seed, {expiresIn: this.caducidad})
}
//metodo que compara el TOKEN dado para mantener la sesion abierta. Por eso se trabaja como promesa
static comprobarToken(token:string):Promise<any>{
    return new Promise ((resolve, reject)=>{
        jwt.verify(token, this.seed, (error,decode)=>{
            if(error){
            return reject ()
            }
            else{
                return resolve(decode)
            }

        

        })
    })
}
}