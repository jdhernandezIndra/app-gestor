import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MapsComponent } from './maps/maps.component';

const childRoutes: Routes = [
  { path: 'inicio', component:InicioComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'maps', component: MapsComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildPagesRoutesModule {}
