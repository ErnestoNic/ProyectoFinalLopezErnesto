//SERVICIO QUE PERMITE CONECTAR CON EL SERVIDOR

import express from 'express';
import variables_entorno from '../config';


export default class server {
    public app: express.Application;
    public port: number = variables_entorno.PORT;
    public host: string= variables_entorno.HOST;

    constructor(){
        this.app =express();
    }

    public start(callback:any){
        this.app.listen(this.port, this.host, callback);
    }
}