import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../lib';
enum Views {
  Login = 1,
  Signup
}
@Component({
  selector: 'app-admin-signin-page',
  templateUrl: './admin-signin-page.component.html',
  styleUrls: ['./admin-signin-page.component.css']
})
export class AdminSigninPageComponent implements OnInit {
  Views = Views;
  state: Views = Views.Login;
  admin: Admin = { phone: '', password: '', repassword: '', nickname: '' };
  async signin() {
    let result = await this.config.admin.signin(this.admin);
    if (result) {
      this.config.admin.goAdminHome();
    }

  }
  async signup() {
    if (this.admin.password == this.admin.repassword) {
      let data = await this.config.admin.signup(this.admin);
      if (data) {
        this.config.admin.goAdminHome();
      }


    } else {
      alert('密码不一致');
    }

  }
  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

}
