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
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
