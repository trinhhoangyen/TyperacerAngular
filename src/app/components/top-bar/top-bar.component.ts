import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isLoggedIn = false;
  userInfo: any;

  constructor(private fireService: AuthenticationService) { }

  ngOnInit(): void {
    this.userInfo = this.fireService.userInfo;
    if (this.userInfo) {
      this.isLoggedIn = true;
    }
  }

  LoginFB() {
    this.fireService.LoginFaceBook()
    .then(() => {
        this.checkLogin();
    })
    .catch(error => {
      console.error(error);
      alert('Đăng nhập không thành công');
    });
  }

  LoginGG() {
    this.fireService.LogInGoogle()
    .then(() => {
      this.checkLogin();
    })
    .catch(error => {
      console.error(error);
      alert('Đăng nhập không thành công');
    });
  }

  private checkLogin() {
    this.userInfo = this.fireService.userInfo;
    if (this.userInfo) {
      this.isLoggedIn = true;
      alert('Đăng nhập thành công');
    } else {
      alert('Đăng nhập không thành công');
    }
  }

  LogOut() {
    this.fireService.LogOut()
      .then(() => {
        this.isLoggedIn = false;
        this.userInfo = '';
    }).then(() => {
      localStorage.removeItem('user');
      alert('Đăng xuất thành công!');
    }).catch(error => {
        console.error(error);
        alert('Đăng xuất không thành công!');
    });
  }
}
