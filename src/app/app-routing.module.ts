import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCardsComponent } from './characters/view-cards/view-cards.component';

const routes: Routes = [
  {
    path: 'characters',
    component: ViewCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
