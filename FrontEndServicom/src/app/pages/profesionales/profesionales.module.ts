import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesionalesRoutingModule } from './profesionales-routing.module';
import { ProfesionalesComponent } from './profesionales.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';





@NgModule({
  declarations: [
    ProfesionalesComponent
  ],
  imports: [
    CommonModule,
    ProfesionalesRoutingModule,
    MatButtonModule,
    MatCardModule,
    

  ],
  exports:[
    ProfesionalesComponent
   
  ]
})
export class ProfesionalesModule { }
