import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
  styleUrls: ['./choose-option.component.scss']
})
export class ChooseOptionComponent implements OnInit {
  @Input() flag: number;
  @Output() flagChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  changeChild(value:number){
    console.log('va' + value)
    this.flagChange.emit(value);
  }

}
