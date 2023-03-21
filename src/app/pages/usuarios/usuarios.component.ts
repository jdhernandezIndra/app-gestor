import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
public usuarios:Usuarios[]=[];
constructor(public userServices:UsuariosService){
  userServices.Usuarios().subscribe(res=>{
    this.usuarios=res;
  })
}


CambiarRol(user:Usuarios){
  this.userServices.cambiarRol(user).subscribe((resp:Usuarios)=>{
    Swal.fire('Cambio de Rol','Cambio exitoso!','success');
  },
  (err: Response) => {
    Swal.fire('Error', 'Por favor verificar su nivel de rol', 'error');
  });
}
inhabilitarUsuario(user:Usuarios){
  this.userServices.inhabilitarUsuario(user).subscribe((resp:Usuarios)=>{
    Swal.fire('Cambio de estado','Cambio exitoso!','success');
  },
  (err: Response) => {
    Swal.fire('Error', 'Por favor verificar su nivel de rol', 'error');
  });
}
}
