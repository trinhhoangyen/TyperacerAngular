import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(public data: AngularFireDatabase) { }

  async getList(){
    return this.data.object('races').valueChanges();
  }
}
