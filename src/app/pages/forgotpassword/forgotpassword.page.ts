import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
username:string;
  constructor() { }

  ngOnInit() {
  }
  recover(){
    console.log(this.username);
  }

}
