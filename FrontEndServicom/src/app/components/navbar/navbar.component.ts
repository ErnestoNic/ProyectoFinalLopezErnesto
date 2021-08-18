import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, public authService:AuthService) { }

  irLogin(){
    this.router.navigate(['/login'])
  }
  irCrearUsuario(){
    this.router.navigate(['/crearUsuario'])
  }
  irUpdateUsuario(){
     this.router.navigate(['/updateUsuario'])
     
  }
 
  back(){
    this.router.navigate(['/'])
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/'])
  }
  
  

  ngOnInit(): void {
  }

}
