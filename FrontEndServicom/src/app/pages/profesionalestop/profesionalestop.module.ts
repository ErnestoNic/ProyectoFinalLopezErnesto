import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesionalestopRoutingModule } from './profesionalestop-routing.module';
import { ProfesionalestopComponent } from './profesionalestop.component';


@NgModule({
  declarations: [
    ProfesionalestopComponent
  ],
  imports: [
    CommonModule,
    ProfesionalestopRoutingModule
  ]
})
export class ProfesionalestopModule { }
