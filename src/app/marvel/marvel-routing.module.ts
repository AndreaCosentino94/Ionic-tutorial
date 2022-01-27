import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarvelPage } from './marvel.page';

const routes: Routes = [
  {
    path: '',
    component: MarvelPage
  },
  {
    path: ':id',
    loadChildren: () => import('../pages/marvel-card/marvel-card.module').then(m=>m.MarvelCardPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarvelPageRoutingModule {}
