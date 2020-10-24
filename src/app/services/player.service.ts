import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor( private firestore: AngularFirestore) { }
  
  getInfoPlayer(id: string){
    return this.firestore.collection(`player/${id}`).valueChanges().pipe();
  }
}
