import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyUserService, RootObject } from '../services/my-user.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  users:RootObject[];
  textFilt = '';
  
  constructor( private userservice:MyUserService ) {}

  userSelected = (user) => {
    //console.log(user);
  };

  option = {
    slidesPreview: 1.5,
    centerSlides:true,
    loop:true,
    spacebetween:10,
    autoplay:true
  }

  filter(event){
    //console.log(event);
    this.textFilt = event.detail.value;
  }

 async ngOnInit(){
    this.users = await this.userservice.getUsers();
  }
}
