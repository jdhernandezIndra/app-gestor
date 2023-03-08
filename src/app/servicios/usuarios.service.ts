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
      'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJESEVSTkFOREVaIiwiZXhwIjoxNjgwNzA2NTUwfQ.s4WZIWw3QzQ1hxuQu1ONCrmFs8HI-Pq5m_l10XCDomulm1DvkxUXzN7neuVMwYnx',
  });
  constructor(private http: HttpClient) {}
  public registra(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.Url + 'usuarios/guardar', usuario);
  }

  public login(usuario: tokenUsuarios): Observable<token>{
    return this.http.post<token>(this.Url + 'token', usuario);
  }
}
