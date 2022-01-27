import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarvelCardPage } from './marvel-card.page';

const routes: Routes = [
  {
    path: '',
    component: MarvelCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarvelCardPageRoutingModule {}
