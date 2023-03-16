import { Component } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
public usuarios:Usuarios[]=[];
constructor(private userServices:UsuariosService){
  userServices.Usuarios().subscribe(res=>{
    this.usuarios=res;
  })
}
}
