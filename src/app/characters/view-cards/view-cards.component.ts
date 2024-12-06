import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.css']
})
export class ViewCardsComponent implements OnInit {
  characterIds: string[] = []; // Aquí almacenamos los IDs de los personajes

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Suscripción a los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      const ids = params['ids']; // Obtiene los IDs desde los queryParams
      if (ids) {
        this.characterIds = ids.split(','); // Convierte el string en un array
      }
    });
  }
}
