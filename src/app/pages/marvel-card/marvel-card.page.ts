import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MyUserService } from 'src/app/services/my-user.service';

@Component({
  selector: 'app-marvel-card',
  templateUrl: './marvel-card.page.html',
  styleUrls: ['./marvel-card.page.scss'],
})
export class MarvelCardPage implements OnInit {

  marvelChar:Observable<any[]>;

  constructor(public routes: ActivatedRoute, private marvelServ: MyUserService) { }

  async ngOnInit() {
    const id = this.routes.snapshot.params.id;
    this.marvelChar = await this.marvelServ.getCharacterId(id);
    console.log(this.marvelChar);
  }

}
