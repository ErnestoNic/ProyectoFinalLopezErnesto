import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesionalesComponent } from './profesionales.component';

const routes: Routes = [{
  path:"", component:ProfesionalesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesionalesRoutingModule { }
