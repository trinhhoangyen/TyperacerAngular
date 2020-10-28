import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private firestore: AngularFireDatabase) {}

  setPercentOfPlayer(roomId: string, userId: string, score: number) {
    this.firestore
      .object(`room/friend-room/${roomId}/players/${userId}`)
      .update({ score });
  }
}
