import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MyUserService } from '../services/my-user.service';

type Pokemon = {
  id: number | string;
  name: string;
  url: string;
};

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemons: Pokemon[] = [];
  letters: string[] = [];
  container: {letter: string; values: Pokemon[]}[] = [];
  myImage:string[];
  myText = '';

  constructor( private pokemonService: MyUserService, private route: ActivatedRoute ) { }

  async ngOnInit() {
    const {results} = await this.pokemonService.loadData();
    this.pokemons = results.map(item => ({
        ...item,
        id: Number(item.url.split('/')[6])
    })).sort((a, b) =>  a.name.localeCompare(b.name));
    
    this.letters = [...new Set(this.pokemons.map(({name}) => name[0]))];

    this.container = this.letters.map((item) =>
    (
      {
        letter: item,
        values: this.getPokemonByChar(item)
      }
    ));
    console.log('container:', this.container);

  }
  option = {
    slidesPreview: 1.5,
    centerSlides:true,
    loop:true,
    spacebetween:10,
    autoplay:true
  }
  getPokemonByChar = (letter: string) =>this.pokemons.filter(({name}) => name[0]  === letter);
    

}
