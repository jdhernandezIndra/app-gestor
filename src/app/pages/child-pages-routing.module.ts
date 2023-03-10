import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';

const childRoutes: Routes = [
  { path: 'inicio', component:InicioComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildPagesRoutesModule {}
