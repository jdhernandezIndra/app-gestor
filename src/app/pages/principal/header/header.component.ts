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
}
