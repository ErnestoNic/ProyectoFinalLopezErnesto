import nodemailer from 'nodemailer';
import path from 'path';
import variables_entorno from '../config';

export default class Email{

    host: string = "smtp.mail.yahoo.com"
    port: number = 25
    secure: boolean = false
    tsl: boolean = false
    auth = {
        user: "enzolopezcosta@yahoo.com",
        pass: "dqlqdhfxycgqszfs"
    }

    constructor(){}

    enviarEmail(cuenta_destino: string, asunto:string, cuerpo_email:string, html:string){//parametros para el envio que se obtienen del buscar la documentacion del servicio de mail en google

return new Promise ((resolve, reject)=>{

const transport = nodemailer.createTransport({
            host: this.host,
            port: this.port,
            secure: this.secure,
            auth:{
                user: this.auth.user,
                pass: this.auth.pass
            },
            tls:{
                rejectUnauthorized: this.tsl
            }
    
        });

        const mailOptions ={//funcion para el envio del mail
            from: this.auth.user,
            to: cuenta_destino,
            subject: asunto,
            text: cuerpo_email,
            html: html,
            attachments:[
                {
                   path: path.resolve (__dirname, '../assets', 'default.jpg')  //imagen hardcodeada para demostrar se mandan adjuntos
            }
                
            ]

        };

        nodemailer.createTestAccount((error)=>{
            transport.sendMail(mailOptions, (error, info)=>{
                if(error){
                   return reject(error)
                
                }else{
                    return resolve (info)
                }
            })
        })

})

        
        }
    }


  

