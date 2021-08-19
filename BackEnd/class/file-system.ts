import path from 'path'; // para el manejo de rutas de carpetas dentro del backend
import fs from 'fs';//para creacion y mover archivos en backend
import unidid from 'uniqid';
import { IfileUpload } from '../interfaces/file-upload';

export default class FileSystem{

    constructor (){};

    //el metodo private permite solo en esta clase crear las carpetas post y temp
    private crearCarpetaUsuario(userId:string):string{

                    /*DIRNAME trae la ruta de acceso de las carpetas / RESOLVE concatena string para armar la ruta con las carpetas upload*/
        const pathUser = path.resolve(__dirname, '../uploads', userId);

                    /*CREA la carpeta temporal dentro del usuario que postea imagen
                    pathUser+'/temp'*/
        const pathUserTemp = path.resolve(pathUser, 'temp')

        const existe:boolean = fs.existsSync(pathUser);//valida si la carpeta ya se creo y existe por un posteo anterior

        if(!existe){
        
        fs.mkdirSync(pathUser);//crea la carpeta
        fs.mkdirSync(pathUserTemp); //crea la otra carpeta  
        }

        return pathUserTemp;
        
    }

       /*PRIVATE que solo se emplea en este metodo para generar nombres univocos para el almacenado de archivos */
       private generarNombreUnico(nombreOriginal:string):string{
        const nombreArr:Array<string> = nombreOriginal.split('.'); //split es la extension del archivo jpeg, pdf,etc
        const extension:string = nombreArr[nombreArr.length-1];
        const idUnico: string = unidid();

        return `${idUnico}.${extension}`;

    }

    guardarImagenTemporal(userId:string, file:IfileUpload):Promise<any>{

        return new Promise((resolve, reject)=>{

            const path:string = this.crearCarpetaUsuario(userId)//La ruta en la que se guardará la imagen
        const nombreArchivo:string = this.generarNombreUnico(file.name)//El nombre de la imagen guardada en path
        
        //mv es el metodo que ejecuta el guardado
        file.mv(`${path}/${nombreArchivo}`, (error:any)=>{
            if (error){
                return reject (error)
            }else{
                return resolve ("ok")
            }
        })
        })

        

    };

     private obtenerImagenesEnTemp(userId:string):Array<string>{
         const pathTemp = path.resolve(__dirname, '../uploads', userId, 'temp');//ruta a leer
         return fs.readdirSync(pathTemp)||[]; //lee el archivo y genera un array con todos los archivos del path
     }

    imagenDeTempHaciaPost(userId:string){

        const pathUserTemp= path.resolve(__dirname, '../uploads', userId, 'temp')//desde donde proviene 
        const pathUserPost= path.resolve(__dirname, '../uploads', userId, 'post')//hacia donde ira guardada

        //validacion de si existe las carpetas
        if(!fs.existsSync(pathUserTemp)){
            return [];
        }
        if (!fs.existsSync(pathUserPost)){
            fs.mkdirSync(pathUserPost)
        }

        const imagenesTemp: Array<string>= this.obtenerImagenesEnTemp(userId);//trae la imagen

        imagenesTemp.forEach(imagen=>{
            fs.renameSync(`${pathUserTemp}/${imagen}`, `${pathUserPost}/${imagen}`)//renombrando de temp a post


        });

        return imagenesTemp;

    };

    getFotoUrl(userId:string, img:string){

        const pathFoto = path.resolve(__dirname, '../uploads', userId, 'post', img);

        if(fs.existsSync(pathFoto)){
            return pathFoto
        }else {
            return path.resolve (__dirname, '../assets', 'default.jpg');
        }

    }

    validarPathUpload(){
        const pathUpload = path.resolve(__dirname, '../uploads');
        if(!fs.existsSync(pathUpload)){
            fs.mkdirSync(pathUpload);
        }
    }
}