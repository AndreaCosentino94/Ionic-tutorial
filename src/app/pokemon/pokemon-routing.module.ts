import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonPage } from './pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonPage
  },
  {
    path: ':id',
    loadChildren: () => import('../pages/poke-card/poke-card.module').then(m => m.PokeCardPageModule)
    //loadChildren: () => import('./pokemon-detail/pokemon-detail.module').then( m => m.PokemonDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonPageRoutingModule {}
