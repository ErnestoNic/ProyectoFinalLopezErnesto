import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdjuntarImagenComponent } from './adjuntar-imagen.component';

const routes: Routes = [
  {path:"", component:AdjuntarImagenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdjuntarImagenRoutingModule { }
