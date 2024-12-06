import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEpisode } from '../models/iepisode';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  getEpisode(): Observable<{ results: IEpisode[] }> {
    return this.http.get<{ results: IEpisode[] }>(this.apiUrl);
  }

}

