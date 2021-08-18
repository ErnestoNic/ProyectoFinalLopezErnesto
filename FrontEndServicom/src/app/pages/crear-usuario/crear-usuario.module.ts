import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioRoutingModule } from './crear-usuario-routing.module';
import { CrearUsuarioComponent } from './crear-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //PARA FORM REACTIVOS
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    CrearUsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    

   


  ]
})
export class CrearUsuarioModule { }
