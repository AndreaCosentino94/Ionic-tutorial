import { NgModule } from '@angular/core';
import { MyfilterPipe } from './myfilter.pipe';



@NgModule({
  declarations: [MyfilterPipe],
  exports: [ MyfilterPipe ]
})
export class PipesModule { }
