import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {

  constructor(public data: AngularFireDatabase) { }

  async getList(){
    return this.data.object('paragraphs').valueChanges();
  }
}
