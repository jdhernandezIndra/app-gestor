import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public usuario: Usuario;
  public imagen = '';
  public clase_header = '';
  constructor(private userservices: UsuariosService) {
    this.usuario = userservices.user;
    this.clase_header = userservices.clase_header;
  }
  salir() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  collapse_sidebar(){
    let tema=localStorage.getItem('tema-sidebar');


    const sidebar=document.querySelector('#sidebar');
    const navbar=document.querySelector('#nav-header');
    const container=document.querySelector('#container-custom');

    if(tema.includes('site')){
      this.userservices.clase_sidebar= 'sidebar-active bg-secondary';
      this.userservices.clase_header='navbar bg-ligth w80p-fr-active';
      this.userservices.clase_container='container-custom-active';
    }else{
      this.userservices.clase_sidebar= 'sidebar-site bg-dark';
      this.userservices.clase_header='navbar bg-ligth w80p-fr';
      this.userservices.clase_container='container-custom';
    }
    sidebar.classList.value= this.userservices.clase_sidebar;
    navbar.classList.value= this.userservices.clase_header;
    container.classList.value= this.userservices.clase_container;
    localStorage.setItem('tema-sidebar',this.userservices.clase_sidebar);
    localStorage.setItem('tema-header',this.userservices.clase_header);
    localStorage.setItem('container-custom',this.userservices.clase_container);
  }
}
