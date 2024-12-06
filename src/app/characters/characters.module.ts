import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ViewCardsComponent } from './view-cards/view-cards.component';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    CardsComponent,
    ViewCardsComponent
  ],
  imports: [
    CommonModule,
  
  ]
})
export class CharactersModule { }
