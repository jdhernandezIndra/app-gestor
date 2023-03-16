import { Component } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Usuario } from 'src/app/modelos/usuario';
import { ApiImageService } from 'src/app/servicios/api-image.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {

  public usuario:Usuario;

  constructor(private api: ApiImageService,public usuarioservices:UsuariosService) {
    this.usuario= usuarioservices.user;
  }

  upload(event: any) {
    const file = event.target.files[0];

    if (file) {
      const formdata = new FormData();
      formdata.append('file', file);

      this.api.upFile(formdata).subscribe(
        (response) => {
          this.usuario.urlImagen = response.url;
          this.usuarioservices.user.urlImagen= response.url;
        },
        (err: Response) => {
          Swal.fire('Error', '' + err.statusText, 'error');
        }
      );
    }
  }

  actualizarUser(){
    const user:Usuarios={
      id: null,
      nombres: this.usuario.nombres,
      apellidos: this.usuario.apellidos,
      usuario: this.usuario.usuario,
      password: this.usuario.password,
      estado: this.usuario.estado,
      urlImagen: this.usuario.urlImagen
    }
    this.usuarioservices.actualizarUsuario(user).subscribe((res:Usuarios)=>{
      Swal.fire('Perfil','Se realizo el cambio exitosamente!','info');
    });
  }
}
