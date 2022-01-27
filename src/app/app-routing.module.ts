import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  },
  {
    path: 'mycard',
    loadChildren: () => import('./pages/mycard/mycard.module').then( m => m.MycardPageModule)
  },
  {
    path: 'mycard/:login',
    loadChildren: () => import('./pages/mycard/mycard.module').then( m => m.MycardPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'poke-card',
    loadChildren: () => import('./pages/poke-card/poke-card.module').then( m => m.PokeCardPageModule)
  },
  {
    path: 'marvel',
    loadChildren: () => import('./marvel/marvel.module').then( m => m.MarvelPageModule)
  },
  {
    path: 'marvel-card/:id',
    loadChildren: () => import('./pages/marvel-card/marvel-card.module').then( m => m.MarvelCardPageModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./comics/comics.module').then( m => m.ComicsPageModule)
  },
  {
    path: 'comics-page',
    loadChildren: () => import('./pages/comics-page/comics-page.module').then( m => m.ComicsPagePageModule)
  },
  {
    path: 'comics-page/:id',
    loadChildren: () => import('./pages/comics-page/comics-page.module').then( m => m.ComicsPagePageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
