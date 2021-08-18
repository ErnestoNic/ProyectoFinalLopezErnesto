import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUsuariosComponent } from './update-usuarios.component';

const routes: Routes = [{
path:"", component: UpdateUsuariosComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateUsuariosRoutingModule { }
