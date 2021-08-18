import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateUsuariosRoutingModule } from './update-usuarios-routing.module';
import { UpdateUsuariosComponent } from './update-usuarios.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    UpdateUsuariosComponent
  ],
  imports: [
    CommonModule,
    UpdateUsuariosRoutingModule,
    MatButtonModule
  ]
})
export class UpdateUsuariosModule { }
