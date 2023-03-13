import { Component } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public usuario:Usuario;
  public imagen="";
  constructor(private userservices: UsuariosService) {
    this.usuario=userservices.user;
  }
  salir(){
    localStorage.removeItem('token');
  }


}
