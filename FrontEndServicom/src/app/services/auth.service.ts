import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';//PERMITE AUNGULAR DETECTAR LA APP ESTA CONECTADA Y AUTENTICADA

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  //PERSISTENCIA y LOGOUT DE LA AUTENTICACION POR TOKEN
    authState = new BehaviorSubject(false);

    authenticate(token:any){//persistencia
      this.authState.next(true)
      localStorage.setItem("token", token);
    };
    isAuthenticate(){
      return this.authState.value
    };
    logout(){//remueve de localStorage y desloguea
      localStorage.removeItem("token");
      this.authState.next(false)
    }
   
}
