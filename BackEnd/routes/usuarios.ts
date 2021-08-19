import {Router, Request, Response} from 'express';
import { Usuario } from '../models/usuarios.model';
import bcrypt from 'bcrypt';
import Token from '../class/token';
import {verificacionToken} from '../middlewares/authentication';
import Email from '../class/emails';
import { Irequest } from '../interfaces/requestExpress';
import usuarioControllers from '../controllers/usuarios'

const emailClass = new Email();


const userRoutes = Router();

//INSERCION EN BASE DE DATOS Y CREACION DE USUARIOS
userRoutes.post('/create', usuarioControllers.create);


//SERVICIO Y/O PETICION POST QUE PERMITE LOGEAR USUARIOS
userRoutes.post('/login', (req:Request, res:Response)=>{

    const body = req.body;
//metodo que solo devuelve un solo registro findOne
    Usuario.findOne({email: body.email},null,null,(error,result)=>{
        if (error){
            throw error
        }if(!result){
            res.json({
                estado: "success",
                mensaje: "Usuario no encontrado en BD",
            })
        }if (result?.compararPassword(body.password)){

            /*CREACION DEL TOKEN Y SUS COMPONENTES PARA SER USADO POR ANGULAR O REACT 
            * Le estamos pasando en el token atributos como _id, nombre y avatar
            */
            const userToken = Token.getJwtToken({
                _id: result.id,
                nombre: result.nombre,
                avatar: result.avatar
            })

            res.json({
                estado: "success",
                token: userToken,
                mensaje: "usuario encontrado",
                data: result
            })
        }
    })

})

//METODO QUE ACTUALIZA REGISTROS EN BD LUEGO DE VALIDAD CON MIDDLEWARES EL TOKEN

userRoutes.put('/update', verificacionToken, (req:Request, res:Response)=>{

    let user:any = {}
    const atributos = ["nombre", "email", "avatar"];
    atributos.forEach(item=>{
        if(req.body[item] != null){
            user[item] = req.body[item]
        }
    })

   

    

    Usuario.findByIdAndUpdate(req.body.usuario._id, user, {new: true}, (error, result)=>{
        /*new:true devuelve en el result como queda en el registro luego de la actualizacion*/ 
        if(error){
            throw error
        }
        if (!result){
            res.json({
                estado: "success",
                mensaje: "Usuario no encontrado"
            })
        }

        res.json({
            estado: "success",
            data: result,
            refreshToken: req.body.refreshToken //enviamos el nuevo token refrescado
        })

    })



})

//EL CODIGO QUEDA MIS LIMPIO SI EN LA RUTA IMPLEMENTO EL CONTROLADOR
userRoutes.get('/', verificacionToken, usuarioControllers.payload)

// userRoutes.get('/', verificacionToken, async (req:any, res:Response)=>{
    
//     const request:Irequest = req;
//     const usuario = request.usuario

//     const emailEnvio = await emailClass.enviarEmail("lopezerneston@gmail.com", "prueba mail", "", "<h2>TEXTO EN HTML<h2>")
    
//     res.json({
//         estado: "success",
//         mensaje: emailEnvio
//     })




// })
    

export default userRoutes;