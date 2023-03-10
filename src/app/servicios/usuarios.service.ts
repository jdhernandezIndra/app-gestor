import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { token } from '../interfaces/token';
import { Usuarios } from '../interfaces/usuarios';
import { tokenUsuarios } from '../interfaces/usuarios-token';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private Url = 'http://localhost:8080/';
  public cabeceras = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    authorization:
      'Bearer '+localStorage.getItem('token'),
  });
  constructor(private http: HttpClient) {}
  public registra(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.Url + 'usuarios/guardar', usuario);
  }

  public login(usuario: tokenUsuarios): Observable<token>{
    return this.http.post<token>(this.Url + 'token', usuario);
  }


  public usuario(): Observable<Usuarios>{
    return this.http.get<Usuarios>(this.Url + 'usuarios/'+localStorage.getItem('user'),{headers:this.cabeceras});
  }
}
