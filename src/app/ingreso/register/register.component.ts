import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, of, throwError } from 'rxjs';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public nombres: string = '';
  public apellidos: string = '';
  public usuario: string = '';
  public password: string = '';
  public password2: string = '';
  public estado: boolean = true;
  public urlImagen: string = '';

  constructor(private usuarioservices: UsuariosService) {}

  registrar() {
    if(this.nombres!=''&&  this.apellidos!='' && this.password!='' && this.password2!='' && this.usuario!=''){
      if (this.password === this.password2) {
        const usuarioNuevo: Usuarios = {
          nombres: this.nombres,
          apellidos: this.apellidos,
          usuario: this.usuario,
          password: this.password,
          estado: true,
          urlImagen: '',
      };

      this.usuarioservices
        .registra(usuarioNuevo)
        .pipe(
          catchError((err) => {
            Swal.fire('Error', err, 'warning');
            return throwError(err);
          })
        )
        .subscribe((resp: Usuarios) => {
          Swal.fire(
            'Registro',
            'Se realizo exitosamente el registro',
            'success'
          );
        });
      } else {
        Swal.fire('Error', 'La contraseña no coincide', 'warning');
      }
    }else{
      Swal.fire('Error', 'Todos los campos deben estar diligenciados', 'warning');
    }
  }
}
