import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Banda } from './banda';

@Injectable({
  providedIn: 'root'
})
export class BandasService {

  private apiUrl : string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(() => new Error("Error en el servicio")))
      );
  }

}
