import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  swt(){
Swal.fire('Hola','funciona!!!','success');
  }
}
