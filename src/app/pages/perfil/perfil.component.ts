import { Component, OnInit } from '@angular/core';
import { ApiImageService } from 'src/app/servicios/api-image.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public usuario: string = '';

  public srcImage: string = 'http://localhost:8080/media/visualizar/perfil.jpeg';

  constructor(private api: ApiImageService,private usuarioservices:UsuariosService) {}
  ngOnInit(): void {
    this.usuario = localStorage.getItem('user') || '';
    if (this.usuario != '') {
      this.usuarioservices.usuario().subscribe(res=>{
        //this.srcImage=res.urlImagen;
      });
    }
  }

  upload(event: any) {
    const file = event.target.files[0];

    if (file) {
      const formdata = new FormData();
      formdata.append('file', file);

      this.api.upFile(formdata).subscribe(
        (response) => {
          this.srcImage = response.url;
          Swal.fire('Se cargo imagen correctamente!');
        },
        (err: Response) => {
          Swal.fire('Error', '' + err.statusText, 'error');
        }
      );
    }
  }
}
