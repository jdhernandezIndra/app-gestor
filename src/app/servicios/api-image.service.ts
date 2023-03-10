import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { upload } from '../interfaces/archivoUpload';

@Injectable({
  providedIn: 'root'
})
export class ApiImageService {
  private Url = 'http://localhost:8080/';
  public cabeceras = new HttpHeaders({
    'authorization':
      'Bearer '+localStorage.getItem('token'),
  });

  constructor(private http: HttpClient) { }

  public upFile(formData: FormData): Observable<upload> {
    return this.http.post<upload>(this.Url + 'media/cargar', formData,{headers:this.cabeceras});
  }
}
