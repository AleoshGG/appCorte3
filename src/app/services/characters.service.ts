import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCharacter } from '../models/iCharacter';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private URL_BASE = 'https://rickandmortyapi.com/api/character';

  constructor(private _http: HttpClient) {}

  getSingleCharacter(id: number): Observable<iCharacter> {
    return this._http.get<iCharacter>(`${this.URL_BASE}/${id}`);
  }
}
