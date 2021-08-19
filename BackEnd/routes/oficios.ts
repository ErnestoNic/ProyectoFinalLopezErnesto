import bodyParser from "body-parser";
import { Router, Request, Response } from "express";
import { verificacionToken } from "../middlewares/authentication";
import { Oficios } from "../models/oficios.model";


const tradeRoutes = Router ();

tradeRoutes.put('/update', verificacionToken, (req,res)=>{

    let trade:any = {}
    const atributos = ["oficio", "descripcion", "icon"];
    //console.log(req.body);
    atributos.forEach(item=>{
        if(req.body[item] != null){
            trade[item] = req.body[item] }
        })
       // console.log(trade);

        Oficios.findByIdAndUpdate(req.body.id, trade, {new: true}, (error, result)=>{
            /*new:true devuelve en el result como queda en el registro luego de la actualizacion*/ 
            if(error){
                throw error
            }
            if (!result){
                res.json({
                    estado: "success",
                    mensaje: "Oficio no existe"
                })
            }
    
            res.json({
                estado: "success",
                data: result,
                refreshToken: req.body.refreshToken //enviamos el nuevo token refrescado
            })
    
        })
})

tradeRoutes.get('/set', verificacionToken, (req:Request, res:Response)=>{

    
   
    Oficios.find({}, (error, result)=>{
      
        if(error){
            throw error
        }
        
        res.json(result)
      

    })
})

tradeRoutes.post('/create', (req:Request,res:Response)=>{

    const trade = {
        oficio: req.body.oficio,
        descripcion: req.body.descripcion
    }; 

    Oficios.create(trade).then(result=> {
        res.json({
            estado: "success",
            mensaje: result
        })
    })
    .catch(error=>{
        res.json({
            estado:"error",
            mensaje: error
        })
    })
    

})

export default tradeRoutes;