import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import Swal from 'sweetalert2';
import { token } from '../interfaces/token';
import { Usuarios } from '../interfaces/usuarios';
import { tokenUsuarios } from '../interfaces/usuarios-token';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private Url = 'http://localhost:8080/';
  public user: Usuario;
  public clase_header="";
  public clase_sidebar="";
  public cabeceras = new HttpHeaders({
    authorization: 'Bearer ' + localStorage.getItem('token'),
  });
  constructor(private http: HttpClient) {
    if(localStorage.getItem('tema-header')){
      this.clase_header=localStorage.getItem('tema-header');
    }else{
      this.clase_header="navbar bg-light w80p-fr";
    }
    if(localStorage.getItem('tema-header')){
      this.clase_sidebar=localStorage.getItem('tema-sidebar');
    }else{
      this.clase_sidebar="sidebar-site bg-dark";
    }


  }
  public registra(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.Url + 'usuarios/guardar', usuario);
  }

  public login(usuario: tokenUsuarios): Observable<token> {
    return this.http.post<token>(this.Url + 'token', usuario);
  }

  public usuario(): Observable<Usuarios> {
    return this.http
      .get<Usuarios>(this.Url + 'usuarios/us/' + localStorage.getItem('user'))
      .pipe(
        map((res: Usuario) => {
          this.user = new Usuario(
            res.id,
            res.nombres,
            res.apellidos,
            res.usuario,
            res.password,
            res.estado,
            res.urlImagen,
            res.rol
          );
          return res;
        }),
        catchError((error) => of(error))
      );
  }

  public tokenVerify(): Observable<boolean> {
    return this.http
      .get<Usuarios>(
        this.Url + 'token/habilita/' + localStorage.getItem('user'),
        {
          headers: { authorization: 'Bearer ' + localStorage.getItem('token') },
        }
      )
      .pipe(
        map((res: Usuario) => {
          this.user = new Usuario(
            res.id,
            res.nombres,
            res.apellidos,
            res.usuario,
            res.password,
            res.estado,
            res.urlImagen,
            res.rol
          );
          return true;
        }),
        catchError((error: boolean) => of(false))
      );
  }

  public actualizarUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(this.Url + 'usuarios/actualiza', usuario, {
      headers: { authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }

  public cambiarRol(usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(this.Url + 'usuarios/rol', usuario, {
      headers: { authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }

  public inhabilitarUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(this.Url + 'usuarios/inhabilitar', usuario, {
      headers: { authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }

  public Usuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.Url + 'usuarios/lista', {
      headers: { authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }
}
