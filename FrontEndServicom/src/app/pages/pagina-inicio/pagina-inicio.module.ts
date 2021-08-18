import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicioRoutingModule } from './pagina-inicio-routing.module';
import { PaginaInicioComponent } from './pagina-inicio.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfesionalesModule } from '../profesionales/profesionales.module';



@NgModule({
  declarations: [
    PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    PaginaInicioRoutingModule,
    MatCardModule,
    MatGridListModule,
    ProfesionalesModule
  ], 
  exports:[
    PaginaInicioComponent
  ]
})
export class PaginaInicioModule { }
