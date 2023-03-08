import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './ingreso/login/login.component';
import { RegisterComponent } from './ingreso/register/register.component';

import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PaginasComponent } from './pages/paginas.component';
import { MenuComponent } from './pages/principal/menu/menu.component';
import { HeaderComponent } from './pages/principal/header/header.component';
import { FooterComponent } from './pages/principal/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopageFoundComponent,
    InicioComponent,
    PaginasComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
