import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor() { }

  ngOnInit() {
  }

  //#region Login
  public login() {
    if (this.username && this.password) {
      let data = {
        username: this.username,
        password: this.password
      };
    }
  }

  public keypressLogin(keycode) {
    if (keycode == 13) {
      // Falls Enter gedrückt
      this.login();
    }
  }
  //#endregion

}
