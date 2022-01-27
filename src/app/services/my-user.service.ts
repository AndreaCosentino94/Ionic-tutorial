import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

type Response = {
  results: {
    name: string;
    url: string;
  }[];
};

export interface DetailPokemon {
  abilities: any[];
  forms: any[];
  height: number;
  id: number;
  moves: any[];
  name: string;
  order: number;
  species: any;
  sprites: any;
  stats: any[];
  types: any[];
  weight: number;
}

export interface RootObject {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

//Marvel
export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Item {
  resourceURI: string;
  name: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item2 {
  resourceURI: string;
  name: string;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

export interface Item3 {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: Item3[];
  returned: number;
}

export interface Item4 {
  resourceURI: string;
  name: string;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: Item4[];
  returned: number;
}

export interface Url {
  type: string;
  url: string;
}

export interface Result {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

export interface RootObject {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}


@Injectable({
  providedIn: 'root'
})
export class MyUserService {

  publicKey= 'INSERT HERE YOUR PUBLIC KEY';
  //for public key you need to subscribe at https://developer.marvel.com/
  hash = 'INSERT HERE YOUR HASH';
  // for hash follow the suggestion on the site
  
  urlCharacters= `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.publicKey}&hash=${this.hash}`;
  
  urlComics=`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${this.publicKey}&hash=${this.hash}`;

  url ='https://api.github.com/users';

  constructor(private http:HttpClient) {}

  getCharacterId(id:number){
    return this.http.get<any[]>('https://gateway.marvel.com/v1/public/characters/'+id+'?&ts=1&apikey='+this.publicKey+'&hash='+this.hash)
      .pipe(map((data: any) => data.data.results)).toPromise();
  }
  getAllCharacters(){
    return this.http.get<any[]>(this.urlCharacters)
      .pipe(map((data: any) => data.data.results)).toPromise();
  }
  getAllComics(){
    return this.http.get<any[]>(this.urlComics)
      .pipe(map((data: any) => data.data.results)).toPromise();
  }
  getComicsId(comicId:number){
    return this.http.get<any[]>(`https://gateway.marvel.com/v1/public/comics/${comicId}?&ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
    .pipe(map((data: any) => data.data.results)).toPromise();
  }

  getUsers(){
    return this.http.get<RootObject[]>(this.url).toPromise();
  }
  getSingleUser(login:string){
    return this.http.get<RootObject[]>(`https://api.github.com/users/${login}`).toPromise();
  }

  loadData(){
    return this.http.get<Response>('https://pokeapi.co/api/v2/pokemon', {}).toPromise();
  }

  getSinglePokemon(id: number){
    return this.http.get<DetailPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`, {}).toPromise();
  }
  filteredPokemon(filt:string){
    return this.http.get<DetailPokemon>(`https://pokeapi.co/api/v2/pokemon/${filt}`, {}).toPromise();
  }
    
}
