import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {

  constructor(public data: AngularFireDatabase) { }

  async getList() {
    let para: string;
    this.data.list('paragraphs').valueChanges()
            .subscribe(res => {
              const t = res as Array<string>;
              const index = this.getRandom(res.length);
              para =  t[index];
            });
    return para;
  }

  getRandom(num: number){
    return Math.floor(Math.random() * num);
  }
  async getAParagraph(){
    const listPara = new Observable<string[]>((observer) => {

    });
    // listPara = this.getList();
    // (await this.getList()).subscribe(res => listPara = res);
    // await console.log(listPara)
    // let index = Math.floor(Math.random() * listPara.length);
    // return listPara[index];
    // random
  }
}
