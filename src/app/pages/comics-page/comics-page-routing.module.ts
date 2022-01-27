import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsPagePage } from './comics-page.page';

const routes: Routes = [
  {
    path: '',
    component: ComicsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsPagePageRoutingModule {}
