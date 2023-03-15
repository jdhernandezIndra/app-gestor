import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { token } from 'src/app/interfaces/token';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { tokenUsuarios } from 'src/app/interfaces/usuarios-token';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public usuarioerror:string="";
  loginForm=this.fb.group({
    usuario:['',Validators.required],
    password:['',Validators.required],
  });

  constructor(
    private router: Router,
    private usuarioservices: UsuariosService,
    private fb: FormBuilder
  ) {}

  login() {
if(this.loginForm.valid){
  this.usuarioservices.login(this.loginForm.value).subscribe(
    (resp: token) => {
      localStorage.setItem('token', resp.token);
      localStorage.setItem('user', this.loginForm.get('usuario').value);
      this.router.navigateByUrl('/inicio');
    },
    (err: Response) => {
      Swal.fire('Error', '' + err.statusText, 'error');
    }
  );


}else{
  this.usuarioerror=this.loginForm.get('usuario')?.errors?.['required'];
}
  }
}
