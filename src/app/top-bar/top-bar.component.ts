import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isLoggedIn = false;
  userInfo: any;

  constructor(private fireService: FirebaseService) { }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('user'));
    if (this.userInfo) {
      this.isLoggedIn = true;
    }
  }

  LoginFB() {
    this.fireService.LoginFaceBook()
      .then(() => {
        this.isLoggedIn = true;
        this.userInfo = JSON.parse(localStorage.getItem('user'));
        console.log(this.userInfo);
    });
  }

  LoginGG() {
    this.fireService.LogInGoogle()
      .then(() => {
        this.isLoggedIn = true;
        this.userInfo = JSON.parse(localStorage.getItem('user'));
    });
  }


  LogOut() {
    this.fireService.LogOut()
      .then(() => {
        this.isLoggedIn = false;
        this.userInfo = '';
    });
  }
}
