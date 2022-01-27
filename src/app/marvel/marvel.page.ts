import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Data, MyUserService, Result } from '../services/my-user.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.page.html',
  styleUrls: ['./marvel.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarvelPage implements OnInit {

  allCharacters :Data;

  constructor( private marvelService: MyUserService) { }

  option = {
    slidesPreview: 1.5,
    centerSlides:true,
    loop:true,
    spacebetween:10,
    autoplay:true
  }

  async ngOnInit() {
    //const {results} = await this.marvelService.getAllCharacters();
    this.allCharacters = (await this.marvelService.getAllCharacters());
    console.log(this.allCharacters);
  }

}
