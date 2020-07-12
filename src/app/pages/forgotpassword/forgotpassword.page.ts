import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.page.html",
  styleUrls: ["./forgotpassword.page.scss"],
})
export class ForgotpasswordPage implements OnInit {
  username: string;
  constructor(private _router: Router) {}

  ngOnInit() {}
  recover() {
    console.log(this.username);
  }
  cancel() {
    this._router.navigate(["login"]);
  }
}
