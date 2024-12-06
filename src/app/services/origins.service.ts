import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iOrigin } from '../models/iOrigin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OriginsService {
  private URL_BASE = 'https://rickandmortyapi.com/api/location';

  constructor(private _http: HttpClient) {}

  getSingleLocation(id: number): Observable<iOrigin> {
    return this._http.get<iOrigin>(`${this.URL_BASE}/${id}`);
  }
}
