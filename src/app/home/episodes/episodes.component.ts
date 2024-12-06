import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
import { EpisodesService } from '../../services/episodes.service';
import { IEpisode } from '../../models/iepisode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent {
  episodes: IEpisode[] = []; 

  constructor(
    private episodeService: EpisodesService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.episodeService.getEpisode().subscribe(data => {
      this.episodes = data.results;
      console.log(data.results)
    });
  }

  viewCharacters(characterUrls: string[]): void {
    const characterIds = characterUrls.map(url => {
      const urlParts = url.split('/');
      return urlParts[urlParts.length - 1]; 
    });

    this.router.navigate(['/characters'], { queryParams: { ids: characterIds.join(',') } });
  }
}
