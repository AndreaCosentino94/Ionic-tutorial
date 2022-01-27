import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicsPagePageRoutingModule } from './comics-page-routing.module';

import { ComicsPagePage } from './comics-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicsPagePageRoutingModule
  ],
  declarations: [ComicsPagePage]
})
export class ComicsPagePageModule {}
