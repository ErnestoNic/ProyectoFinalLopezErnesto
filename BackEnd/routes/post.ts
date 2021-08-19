import {Router, Response} from 'express'; //cuando creamos rutas debemos luego indicar en index.ts 
import { IfileUpload } from '../interfaces/file-upload';
import { verificacionToken } from '../middlewares/authentication';
import { Post } from '../models/post.model';
import FileSystem from '../class/file-system';


const fileSystem = new FileSystem();

const postRouter = Router();

postRouter.post('/', verificacionToken, (req:any, res:Response)=>{

    const body = req.body;
    //body.usuario = req.body.usuario._id;

    const imagenes = fileSystem.imagenDeTempHaciaPost(req.body.usuario._id);

    body.img = imagenes


    Post.create(body)
        .then(async postDb=>{

           await postDb.populate('usuario').execPopulate()//funcion que establece un JOIN


            res.json({
                estado: "success",
                data: postDb
            })
        })


})

postRouter.get('/', async (req:any, res:Response)=>{//funcion que busca y recupera registros y posteos

    /**
     * let pagina y el query string permite agrupar los registros de a 10 usando el skip
     * let pagina -1 es parte del calculo para determinar donde incia el paginado
     */
    let ctd = Number(req.query.ctd_por_pagina)
    let pagina = Number (req.query.pagina) || 1;
    let skip = pagina -1;
    skip = skip*ctd
    
    const post= await Post.find()//constane que almacena el posteo encontrado encontrado por metodo find
                          .sort({_id:-1})//metodo que ordena de manera descendente (lo ultimo primero)
                          .skip(skip)//metodo que efectua salto de pagina. 
                          .limit(ctd)//metodo que muestra cantidad de registros segun determine el usuario de la pagina
                          .populate('usuario', '-password')//metodo que como el JOIN trae el usuario que postea y permite excluir password 
                          .exec()//metodo que finaliza la ejecucion de la tarea

    res.json({
        estado: "success",
        data: post
    })
})

postRouter.post('/upload', verificacionToken, async (req:any, res:Response)=>{

    const imagen: IfileUpload = req.files.img
    
    //console.log(req.body.usuario)
   
    if(!imagen){
        return res.status(400).json({
            estado: "error",
            mensaje: "no se envio imagen"
        })

        
    }
    
    const validartipoImagen = imagen.mimetype.includes('image');
    
    if(!validartipoImagen){
        return res.status(400).json({
            estado: "error",
            mensaje:"el file no es una imagen"
        })
    }

    const guardarArchivo = await fileSystem.guardarImagenTemporal(req.body.usuario._id, imagen);

    res.json({
        estado: "success",
        imagen: imagen,
        guardarArchivo: guardarArchivo
    })

})

postRouter.get('/imagen/:userId/:img', (req:any, res:Response)=>{
    const userId= req.params.userId;
    const img = req.params.img;

    const pathFoto = fileSystem.getFotoUrl(userId, img);
    res.sendFile(pathFoto)
})

export default postRouter;