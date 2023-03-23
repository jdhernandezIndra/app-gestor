import { Component } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.css'],
})
export class PaginasComponent {
  public clase_container = '';
  constructor(private userservices: UsuariosService) {
    this.clase_container = userservices.clase_container;
  }
}
