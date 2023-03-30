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
    const httpOptions = {
      'responseType'  : 'arraybuffer' as 'json',
      headers: { authorization: 'Bearer ' + localStorage.getItem('token') }
       //'responseType'  : 'blob' as 'json'        //This also worked
    };
    return this.http.get(this.Url + 'usuarios/pdf/lista',httpOptions);
  }

  public excelUsuarios(): Observable<any> {
    const httpOptions = {
      'responseType'  : 'arraybuffer' as 'json',
      headers: { authorization: 'Bearer ' + localStorage.getItem('token') }
       //'responseType'  : 'blob' as 'json'        //This also worked
    };
    return this.http.get(this.Url + 'usuarios/excel/lista',httpOptions);
  }
}
