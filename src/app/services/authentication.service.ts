import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public fireAuth: AngularFireAuth,
    public data: AngularFireDatabase) { }

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

  async CheckUserInStore(user: any) {
    console.log(user);
    const itemsRef = this.data.object(`players/${ user.uid }`);

    itemsRef.valueChanges().subscribe(res => {
        if (res == null) {
          itemsRef.set({
            name: user.displayName,
            races: []
          });
        }
    });
  }
}
