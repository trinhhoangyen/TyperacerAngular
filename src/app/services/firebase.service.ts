import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public fireAuth: AngularFireAuth) { }

  async LogOut() {
    return this.fireAuth.auth.signOut();
  }

  Login(provider) {
    return this.fireAuth.auth.signInWithPopup(provider);
  }

  async LoginFaceBook() {
    return this.Login(new auth.FacebookAuthProvider());
  }

  async LogInGoogle() {
    return this.Login(new auth.GoogleAuthProvider());
  }
}
