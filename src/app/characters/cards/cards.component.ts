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
    origin: {
      name: '',
      url: '',
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

  isModalOpen = false;
  originId: number | null = null;

  viewLocation(originURL: string): void {
    const id = this.getIdFromUrl(originURL);
    if (id) {
      this.originId = id; // Almacena el ID del origen
      this.isModalOpen = true; // Abre el modal
    }
  }

  onModalConfirm(): void {
    this.isModalOpen = false;
  }

  onModalCancel(): void {
    this.isModalOpen = false;
  }

  private getIdFromUrl(url: string): number {
    // Usa una expresión regular para capturar el último número de la URL
    const match = url.match(/\/(\d+)$/);
    // Devuelve el número como un entero o lanza un error si no se encuentra
    return match ? parseInt(match[1], 10) : NaN;
  }
}
