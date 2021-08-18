import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-adjuntar-imagen',
  templateUrl: './adjuntar-imagen.component.html',
  styleUrls: ['./adjuntar-imagen.component.css']
})
export class AdjuntarImagenComponent implements OnInit {

  constructor(private fileService: FileService) { }

  file:any = []
  filename:string="";

  private validarFile(event:any):Boolean{
    const maxSize = 500000;
    this.file = event.target.files;
    this.filename = event.target.files[0].name

    console.log(this.file)

    if(this.file.length <=0){
      console.log("no se adjunto imagen");
      this.filename = "no hay imagen";
      this.file = [];
      return false
    }

    if(this.file[0].type!= 'image/jpeg'){
      console.log("el formato no es valido");
      this.file = [];
      return false
    }

    if(this.file[0].size > maxSize){
      console.log("ha superado en tamaño permitido");
      this.file = [];
      return false
    }

    return true;
  }

  onFileChange(event:any){


    const validacion = this.validarFile(event);

    if(validacion){
      console.log("valida ok")
      let file = new FormData();
      file.append('img', this.file[0] , this.filename);
      this.fileService.adjuntarImagen(file).subscribe(resp=>{
        console.log(resp)
      })
    }
  }

  ngOnInit(): void {
  }

}
