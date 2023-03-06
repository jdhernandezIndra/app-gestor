import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ingreso/login/login.component';
import { RegisterComponent } from './ingreso/register/register.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginasComponent } from './pages/paginas.component';

const routes: Routes = [
  {
    path: '',
    component: PaginasComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    ]
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NopageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
