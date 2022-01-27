import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeCardPageRoutingModule } from './poke-card-routing.module';

import { PokeCardPage } from './poke-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeCardPageRoutingModule
  ],
  declarations: [PokeCardPage]
})
export class PokeCardPageModule {}
