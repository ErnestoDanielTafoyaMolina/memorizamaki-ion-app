import { Component, OnInit } from '@angular/core';

import { Camera, CameraResultType } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

import { UserService  } from 'src/app/services/user.service';


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
    region:{},
    img:'',
  }

  photo:any
  constructor(
    private userService:UserService,
  ) { }

  ngOnInit() {
    Camera.requestPermissions();
    this.userService.getUserInfo().subscribe(
      (response:any)=>{
        this.User = response;
      },
      (err:any)=>{
        console.log(err);
      }
    );
  };
  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      // source: CameraSource.Camera
    });
    // Can be set to the src of an image now
    if(image){
      this.photo = image.webPath;
      await this.userService.postUserImage(this.photo)
    }
  }
};
