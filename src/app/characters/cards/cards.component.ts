import { Component, Input, OnInit } from '@angular/core';
import { iCharacter } from '../../models/iCharacter';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent implements OnInit {
  @Input({ required: true }) id: number = 0;

  character: iCharacter = {
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
    location: {
      name: '',
      URL: '',
    },
  };

  constructor(private _charactersS: CharactersService) {}

  ngOnInit(): void {
    this._charactersS.getSingleCharacter(this.id).subscribe({
      next: (response) => {
        this.character = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
