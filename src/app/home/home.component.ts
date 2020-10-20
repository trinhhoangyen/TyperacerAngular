import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flag: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  changeParent(value: number) {
    this.flag = value;
    console.log("vaparent" + value)
  }

}
