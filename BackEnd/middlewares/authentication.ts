import { NextFunction, Response } from 'express';
import Token from '../class/token';


//SERVICIO MIDDLEWARE PARA VALIDAR TOKEN

export const verificacionToken = (req:any, res:Response, next:NextFunction)=>{
   
    const userToken = req.get('x-token') || "";/*en la peticion almacen el token req.get pero podria venir vacio y para eso lo transforma en vacio para enviar por el catch */
    
    Token.comprobarToken(userToken)
    .then(decoded=>{
        // console.log("hola")
        req.body.usuario = decoded.usuario
        const refreshToken = Token.getJwtToken({
            /*
            *funcion que permite refrescar el token y que evita el deslogeo por caducidad, se pasa en el middleware para que en cada peticion refresque
             */
            id: decoded._id,
            nombre: decoded.nombre,
            avatar: decoded.avatar
            
        });
        req.body.refreshToken= refreshToken;
        next()/*next solo se coloca en el then luego de resolver la peticion */
    })
    .catch(error=>{
        res.json({
            mensaje: "Token incorrecto",
            error: error
        })
    })
}