import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  User = {
    username:'',
    email:'',
    phone:'',
    region:'',
    img:'https://pixabay.com/es/photos/caf%C3%A9-capuchino-barista-cafe%C3%ADna-8388244/',
  }
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    this.userService.getUserInfo().subscribe(
      (response:any)=>{
        this.User = response;
      },
      (err:any)=>{
        console.log(err);
      }
    );
  };

};
