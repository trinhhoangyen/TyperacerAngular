import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private firestore: AngularFireDatabase) {}

  getInfoPlayer(id: string) {
    return this.firestore.object(`players/${id}`).valueChanges().pipe();
  }
  setPercentOfPlayer(id:string, percent: number) {
    const itemRef = this.firestore.object(`players/${id}`).update({ percent });
  }
  getRoomPlayer(){
    
  }
}
