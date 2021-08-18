import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesionalestopComponent } from './profesionalestop.component';

const routes: Routes = [{
  path:"", component: ProfesionalestopComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesionalestopRoutingModule { }
