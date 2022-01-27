import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyUserService, DetailPokemon } from 'src/app/services/my-user.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.page.html',
  styleUrls: ['./poke-card.page.scss'],
})
export class PokeCardPage implements OnInit {

  currentPokemon: DetailPokemon;
  image: string[];
  skill : string[];

  constructor(private route: ActivatedRoute, private detailService: MyUserService) { }

  async ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.currentPokemon = await this.detailService.getSinglePokemon(id);
    const {sprites} = await this.detailService.getSinglePokemon(id);
    this.image = sprites;
    const {abilities} = await this.detailService.getSinglePokemon(id);
    this.skill = abilities.map(item => item.ability);
  }

}
