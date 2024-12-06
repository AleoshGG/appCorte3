import { Component } from '@angular/core';
import { IEpisode } from '../../models/iepisode';
import { EpisodesService } from '../../service/episodes.service'

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent {


  episodes: IEpisode[] = []; // Arreglo para almacenar los episodios 

  constructor(
    private episode: EpisodesService) {}

    ngOnInit(): void {
      this.episode.getEpisode().subscribe(data => {
        this.episodes = data.results;
      });
    }

}


