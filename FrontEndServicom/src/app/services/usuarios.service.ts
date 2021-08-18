import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }
//SERVICIO QUE PERMITE EL LOGEO DESDE ANGULAR

rutaApi:string=environment.rutaBackend//esto determina la ruta a seguir segun sea variables de entorno de produccion o de desarrollo
time_out = environment.timeOutBackend

  login(loginData:{}):any{//contiene usuario y password y headers / el pipe setea un timeout por si no hay respuesta del backend
    return this.http.post(`${this.rutaApi}/users/login`, loginData,{})
        .pipe(
          timeout(this.time_out))
  }

  verificarToken(){
    return this.http.get(`${this.rutaApi}/users/`)
  }
  setoficios(){
    return this.http.get(`${this.rutaApi}/trades/set`)
  }
}
