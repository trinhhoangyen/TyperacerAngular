import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';
import { ParagraphService } from 'src/app/services/paragraph.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  typeIndex = 0;
  listWord = [];
  paragraph = '';
  paraLength = 0;
  percentRight = 0;
  stringRight = '';
  stringNow = '';
  stringType = '';
  items;
  backgroundColor = 'white';
  color = 'blue';

  constructor(public optionSvc: OptionService, private paragraphSvc: ParagraphService) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragraphSvc.get();
    this.items = this.paragraphSvc.para;
    this.paragraphSvc.para.subscribe(res => {
      this.paragraph = res[0].content;
      this.stringType = this.paragraph;
      this.listWord = this.paragraph.split(' ');
      this.paraLength = this.listWord.length;
      this.typeNow();
    });

  }

  typerace(event: any){
    if (event.target.value === this.listWord[this.typeIndex] || event.target.value === '')
    {
      this.color = 'blue';
      this.backgroundColor = 'white';
      return;
    }
    if (event.target.value.indexOf(' ') >= 0) {
      if (event.target.value === this.listWord[this.typeIndex] + ' '){
        this.typeIndex++;

        this.stringRight += event.target.value + ' ';
        this.stringNow = this.listWord[this.typeIndex];
        this.stringType = this.stringType.replace(this.stringNow, '');

        this.percentRight = this.typeIndex / this.paraLength * 100;
        event.target.value = '';
        return;
      }
    }

    if (this.listWord[this.typeIndex].indexOf(event.target.value) < 0)
    {
      this.color = 'red';
      this.backgroundColor = 'rgb(209, 87, 105)';
      return;
    }
  }
  typeNow(){
    this.stringNow = this.listWord[this.typeIndex];
    this.stringType = this.stringType.replace(this.stringNow, '');
  }
}
