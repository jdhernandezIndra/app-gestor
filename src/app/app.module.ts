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
import { PagesModule } from './pages/pages.module';
import { IngresoModule } from './ingreso/ingreso.module';
import { UsuariosService } from './servicios/usuarios.service';
import { ApiImageService } from './servicios/api-image.service';

@NgModule({
  declarations: [AppComponent, NopageFoundComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, IngresoModule],
  providers: [UsuariosService, ApiImageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
