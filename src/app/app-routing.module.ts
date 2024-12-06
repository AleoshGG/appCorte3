import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCardsComponent } from './characters/view-cards/view-cards.component';
import { EpisodesComponent } from './home/episodes/episodes.component';

const routes: Routes = [
  {
    path: 'characters',
    component: ViewCardsComponent,
  },

  {
    path: 'episodes',
    component: EpisodesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
