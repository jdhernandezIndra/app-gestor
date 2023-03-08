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
      console.log(user)
      this.usuarioservices
        .login(user)
        .pipe(
          catchError((err) => {
            Swal.fire('Error', err, 'warning');
            return throwError(err);
          })
        )
        .subscribe((resp:token) => {
          console.log(resp)
          localStorage.setItem('token',resp.token);
          this.router.navigateByUrl('/');
        });
    } else {
      Swal.fire('Error', 'Los campos deben estar diligenciados', 'error');
    }
  }
}
