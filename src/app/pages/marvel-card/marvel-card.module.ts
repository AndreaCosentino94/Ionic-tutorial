import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarvelCardPageRoutingModule } from './marvel-card-routing.module';

import { MarvelCardPage } from './marvel-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarvelCardPageRoutingModule
  ],
  declarations: [MarvelCardPage]
})
export class MarvelCardPageModule {}
