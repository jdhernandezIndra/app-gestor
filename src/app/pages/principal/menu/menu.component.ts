import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public usuario: Usuario;
  constructor(private userservices: UsuariosService) {
    this.usuario = userservices.user;
  }
}
