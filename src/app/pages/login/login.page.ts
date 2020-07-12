import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  constructor(private _router: Router) {}

  ngOnInit() {}
  login() {
    console.log(this.username, this.password);
  }
  redirectRegisteration() {
    this._router.navigate(["register"]);
  }
  redirectForgotpassword() {
    this._router.navigate(["forgotpassword"]);
  }
}
