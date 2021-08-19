import {Router, Response, Request, NextFunction} from 'express';
import Email from '../class/emails';
import {Irequest} from '../interfaces/requestExpress';
import { Usuario } from '../models/usuarios.model';
import bcrypt from 'bcrypt';

export ={
    //PETICION PAYLOAD DE PRUEBA
    payload: (req:any, res:Response, next:NextFunction)=>{
        let request:Irequest=req;
        const usuario = request.body.usuario;
        

        res.json({
            estado: "success",
            mensaje: usuario
        })
        
    },
    

    //SERVICIO Y/O CONTROLADOR POST QUE CREA USUARIOS A LA BASE DE DATOS
    create: async (req:any, res:Response)=>{

        const emailClass = new Email()
        const user = {
            nombre: req.body.nombre,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10)
        };
        //--> INSERTANDO EN BD
        try{
            const crearUsuario = await Usuario.create(user);
            const enviarEmail = await emailClass.enviarEmail(user.email, "Creacion Cuenta", "Cuenta creada exitosamente","");
            res.json({
                estado: "success",
                mensaje: crearUsuario,
                email: enviarEmail
            })
    
        }catch(error){
        const enviarEmail = await emailClass.enviarEmail(user.email, "Error de creación cuenta", "Ocurrió un problema intente mas tarde","");
        }
    }
}

