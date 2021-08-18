import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  datosBackend:any = []

  constructor(private router: Router, public usuariosService:UsuariosService) {
    
   }

  
  irProfesionales(){
    this.usuariosService.setoficios().subscribe(result=>{
      this.datosBackend = result
    console.log(this.datosBackend)})
    
    this.router.navigate(['/profesionales'])
  }

  irProfesionalesTop(){
    this.router.navigate(['/profesionalestop'])
  }


  irUpdateUsuarios(){
    this.router.navigate(['/update-usuarios'])
  }

  ngOnInit(): void {
  }

}
