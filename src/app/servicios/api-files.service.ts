import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFilesService {
  private Url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  public cabeceras = new HttpHeaders({
    authorization: 'Bearer ' + localStorage.getItem('token'),
  });

  public pdfUsuarios(): Observable<any> {
    return this.http.get(this.Url + 'usuarios/pdf/lista',
    {
      headers: { authorization: 'Bearer ' + localStorage.getItem('token') },
    });
  }
}
