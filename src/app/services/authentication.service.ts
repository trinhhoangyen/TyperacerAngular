import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _userInfo: {
    uid: string,
    name: string
  };
  get userInfo() {
    return this._userInfo;
  }

  constructor(
    public fireAuth: AngularFireAuth,
    public data: AngularFireDatabase) {
      this._userInfo = JSON.parse(localStorage.getItem('user'));
    }

  async LogOut() {
    return this.fireAuth.auth.signOut();
  }

  Login(provider) {
    this.fireAuth.auth.signInWithPopup(provider)
    .then(res => {
      this.CheckUserInStore(res);
      this._userInfo = {
        uid: res.user.uid,
        name: res.user.displayName
      };
      localStorage.setItem('user', JSON.stringify(this._userInfo));
    });
  }

  async LoginFaceBook() {
    return this.Login(new auth.FacebookAuthProvider());
  }

  async LogInGoogle() {
    return this.Login(new auth.GoogleAuthProvider());
  }

  async CheckUserInStore(userInfo) {
    const itemsRef = this.data.object(`players/${ userInfo.user.uid }`);

    itemsRef.valueChanges().subscribe(res => {
        if (res == null) {
          itemsRef.set({
            name: userInfo.user.displayName,
            races: []
          });
        }
    });
  }
}
