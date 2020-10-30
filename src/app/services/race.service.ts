import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Races from 'src/interfaces/race.interface';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  constructor(private firestore: AngularFirestore) {}

  getList(userId: string = '') {
    return this.firestore
      .collection(`races`)
      .doc(userId)
      .collection<Races>('listPoint', (res) => 
        res.orderBy('wpm', 'desc').limit(10)
      )
      .valueChanges();
  }

  addRace(race: Races, userId = '') {
    this.firestore
      .collection(`races`)
      .doc(userId)
      .collection<Races>('listPoint')
      .add(race);
  }
}
