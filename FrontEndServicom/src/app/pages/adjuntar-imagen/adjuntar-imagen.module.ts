import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdjuntarImagenRoutingModule } from './adjuntar-imagen-routing.module';
import { AdjuntarImagenComponent } from './adjuntar-imagen.component';


@NgModule({
  declarations: [
    AdjuntarImagenComponent
  ],
  imports: [
    CommonModule,
    AdjuntarImagenRoutingModule
  ]
})
export class AdjuntarImagenModule { }
