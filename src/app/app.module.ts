import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';
import { HttpClientModule } from '@angular/common/http';
import { EpisodesComponent } from './home/episodes/episodes.component';
import { FormsModule } from '@angular/forms';
import { ViewCardsComponent } from './characters/view-cards/view-cards.component';
import { CardsComponent } from './characters/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    ViewCardsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
