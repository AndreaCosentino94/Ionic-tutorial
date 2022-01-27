import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyUserService } from '../services/my-user.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.page.html',
  styleUrls: ['./comics.page.scss'],
})
export class ComicsPage implements OnInit {

  allComics:Observable<any>;

  constructor( private comicService: MyUserService ) { }

  async ngOnInit() {
    this.allComics = await this.comicService.getAllComics();
    console.log(this.allComics);
  }

}
