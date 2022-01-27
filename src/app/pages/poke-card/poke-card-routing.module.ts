import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeCardPage } from './poke-card.page';

const routes: Routes = [
  {
    path: '',
    component: PokeCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeCardPageRoutingModule {}
