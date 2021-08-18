import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }

  rutaApi:string="http://localhost:3000"

  adjuntarImagen(imagen:FormData){
    return this.http.post(`${this.rutaApi}/post/upload`, imagen, {});
  }
}
