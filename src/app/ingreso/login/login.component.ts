import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { token } from 'src/app/interfaces/token';
import { tokenUsuarios } from 'src/app/interfaces/usuarios-token';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public usuario: string = '';
  public password: string = '';
  constructor(
    private router: Router,
    private usuarioservices: UsuariosService
  ) {}

  login() {
    if (this.usuario != '' && this.password != '') {
      const user: tokenUsuarios = {
        usuario: this.usuario,
        password: this.password,
      };
      this.usuarioservices.login(user).subscribe(
        (resp: token) => {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('user', user.usuario);
          this.router.navigateByUrl('/inicio');
        },
        (err:Response) => {
          Swal.fire('Error', '' + err.statusText, 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Los campos deben estar diligenciados', 'error');
    }
  }
}
