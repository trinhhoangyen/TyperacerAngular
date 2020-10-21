import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';
import { ParagraphService } from 'src/app/services/paragraph.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  list: any = [];
  index: number = 0;
  constructor(public optionSvc: OptionService, private paragraph: ParagraphService) { }
  ngOnInit(): void {
  this.paragraph.getList().then(res => {
    res.subscribe(d => {
      this.list = d;
      this.getParagraph()
    })
  });
  }

  getParagraph(){
    let l = this.list as Array<string>;
    this.index = Math.floor(Math.random() * l.length);
  }

}
