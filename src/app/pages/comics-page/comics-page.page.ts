import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MyUserService } from 'src/app/services/my-user.service';

@Component({
  selector: 'app-comics-page',
  templateUrl: './comics-page.page.html',
  styleUrls: ['./comics-page.page.scss'],
})
export class ComicsPagePage implements OnInit {

  myComics:Observable<any[]>;

  constructor(private comicsservice: MyUserService, public routes: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.routes.snapshot.params.id;
    this.myComics = await this.comicsservice.getComicsId(id);
    console.log(this.myComics);
  }

}
