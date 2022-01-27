import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyUserService, RootObject } from 'src/app/services/my-user.service';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.page.html',
  styleUrls: ['./mycard.page.scss'],
})
export class MycardPage implements OnInit {

  userList:RootObject[];

  constructor( public routes: ActivatedRoute, private userService: MyUserService ) {
  }
  /*
   runUser(){
    this.http.get('https://api.github.com/users')
    .subscribe(data => {
      console.log(data);
      this.myUs = data;
    });
  }
  */
 
  async ngOnInit() {
    const login = this.routes.snapshot.params.login;
    this.userList = await this.userService.getSingleUser(login);
    console.log(this.userList);
  }

}
