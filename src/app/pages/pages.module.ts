import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasComponent } from './paginas.component';
import { FooterComponent } from './principal/footer/footer.component';
import { HeaderComponent } from './principal/header/header.component';
import { MenuComponent } from './principal/menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    InicioComponent,
    PerfilComponent,
    PaginasComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    UsuariosComponent
  ],
  exports: [
    InicioComponent,
    PerfilComponent,
    PaginasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PagesModule {}
