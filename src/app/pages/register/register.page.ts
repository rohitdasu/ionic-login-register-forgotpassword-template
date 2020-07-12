import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  username: string;
  password: string;
  email: string;
  phone: number;
  fullname: string;

  constructor(private _router:Router) {}

  ngOnInit() {}
  register() {
    console.log(
      this.username,
      this.password,
      this.email,
      this.phone,
      this.fullname
    );
  }
  redirectLogin(){
    this._router.navigate(['login'])
  }
}
