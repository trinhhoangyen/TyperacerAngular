import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public fireAuth: AngularFireAuth) { }

  async LogOut() {
    localStorage.removeItem('user');
    return this.fireAuth.auth.signOut()
      .then(() => {
        alert('Đăng xuất thành công!');
    }).catch(error => {
        console.error(error);
        alert('Đăng xuất không thành công!');
    });
  }

  Login(provider) {
    return this.fireAuth.auth.signInWithPopup(provider)
      .then(result => {
        localStorage.setItem('user', JSON.stringify(result.user));
        alert('Đăng nhập thành công');
    }).catch(error => {
        console.error(error);
        alert('Đăng nhập không thành công');
    });
  }

  async LoginFaceBook() {
    return this.Login(new auth.FacebookAuthProvider());
  }

  async LogInGoogle() {
    return this.Login(new auth.GoogleAuthProvider());
  }
}
