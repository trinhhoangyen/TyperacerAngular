import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Races from 'src/interfaces/race.interface';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  constructor(private firestore: AngularFirestore) {}

  getList(id: string = 'jQUjVnZTuVhzN6hs1fkMLhsLQWh2') {
    return this.firestore
      .collection(`races`)
      .doc(id)
      .collection<Races>('listPoint')
      .valueChanges();
  }

  addRace(race: Races, id = 'jQUjVnZTuVhzN6hs1fkMLhsLQWh2') {
    this.firestore
      .collection(`races`)
      .doc(id)
      .collection<Races>('listPoint')
      .add(race);
  }
}
