import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ParagraphService {
  para = new Observable<any>();
  constructor(private firestore: AngularFirestore) {}
  get() {
    //  this.para = this.firestore.collection('paragraphs', res => res.where('id', '==', Math.floor((Math.random() * 4)))
    this.para = this.firestore
      .collection('paragraphs', (res) => res.where('id', '==', 4))
      .valueChanges()
      .pipe();
  }
}
