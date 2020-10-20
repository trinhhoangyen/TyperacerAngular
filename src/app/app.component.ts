import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private db: AngularFireDatabase){
    console.log('vo')
  }

  ngOnInit (): void {
    console.log('oninit')
    this.getList();

  }

  async getList(){
    let list = await this.db.object('paragraphs').valueChanges().subscribe(res => {console.log(res)})
  }
}
