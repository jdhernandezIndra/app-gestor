import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public usuario: string = '';
  ngOnInit(): void {
    this.usuario = localStorage.getItem('user') || '';
    if(this.usuario!=''){

    }
  }
}
