import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from 'src/app/pages/usuarios/usuarios.module';
import { CrearUsuarioModule } from 'src/app/pages/crear-usuario/crear-usuario.module';
import { LoginModule } from 'src/app/pages/login/login.module';
import { PaginaInicioModule } from './pages/pagina-inicio/pagina-inicio.module';
import { UpdateUsuariosModule } from 'src/app/pages/update-usuarios/update-usuarios.module';
import { AuthGuard } from './guards/auth.guard';
import { AdjuntarImagenModule } from 'src/app/pages/adjuntar-imagen/adjuntar-imagen.module';
import { ProfesionalesModule } from 'src/app/pages/profesionales/profesionales.module';
import { ProfesionalestopModule } from 'src/app/pages/profesionalestop/profesionalestop.module';

const routes: Routes = [//ACA SE ESCRIBEN RUTAS DE ANGULAR y LAS RUTAS HIJAS

  {//LEASING LOADING -> PRE CARGA DE LA PAGINA
    path: "usuarios",
    loadChildren:()=> import('src/app/pages/usuarios/usuarios.module').then(m=>UsuariosModule)
    
  },
  {path: "crearUsuario",
    loadChildren:()=> import('src/app/pages/crear-usuario/crear-usuario.module').then(m=>CrearUsuarioModule)
  },

  {path:"login",
  loadChildren:()=> import('src/app/pages/login/login.module').then(m=>LoginModule)
  },

  {path:"paginaInicio",
  loadChildren:()=> import('src/app/pages/pagina-inicio/pagina-inicio.module').then(m=>PaginaInicioModule),
  canActivate: [AuthGuard]//PUEDEN USARSE MAS DE UN GUARDIAN POR RUTA
  },

  {path:"updateUsuario",
  loadChildren:()=> import('src/app/pages/update-usuarios/update-usuarios.module').then(m=>UpdateUsuariosModule),
  canActivate: [AuthGuard]

  },

  {path:"adjuntarImagen",
  loadChildren:()=> import('src/app/pages/adjuntar-imagen/adjuntar-imagen.module').then(m=>AdjuntarImagenModule),
  //canActivate: [AuthGuard]

  },

  {path:"profesionales",
  loadChildren:()=> import('src/app/pages/profesionales/profesionales.module').then(m=>ProfesionalesModule),
  canActivate: [AuthGuard]

  },

  {path:"update-usuarios",
  loadChildren:()=> import('src/app/pages/update-usuarios/update-usuarios.module').then(m=>UpdateUsuariosModule),
  //canActivate: [AuthGuard]

  },

  {path:"profesionalestop",
  loadChildren:()=> import('src/app/pages/profesionalestop/profesionalestop.module').then(m=>ProfesionalestopModule),
  //canActivate: [AuthGuard]
  }];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
