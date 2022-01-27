import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  bool:boolean=false;

  constructor( private menu: MenuController ) { }
  chek(){
    this.bool = !this.bool;
  }
  ngOnInit() {
  }

}
