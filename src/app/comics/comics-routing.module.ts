import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsPage } from './comics.page';

const routes: Routes = [
  {
    path: '',
    component: ComicsPage
  },
  {
    path: 'comics',
    loadChildren: () => import('../comics/comics.module').then( m => m.ComicsPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('../pages/comics-page/comics-page.module').then( m => m.ComicsPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsPageRoutingModule {}
