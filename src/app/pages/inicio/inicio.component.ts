import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('token')===null){
      this.router.navigate(['/login']);
      if(localStorage.getItem('user')!=null){
        localStorage.removeItem('user');
      }
    }
  }

}
