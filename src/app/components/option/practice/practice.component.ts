import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';
import { ParagraphService } from 'src/app/services/paragraph.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  listPara: any = [];
  index: number = 0;

  typeIndex: number = 0;
  para = [];
  paraLength: number = 0;
  percentRight: number = 0;
  status: boolean = false;
  stringRight: string = '';
  stringNow: string = '';
  stringType: string = '';

  backgroundColor: string = 'white';
  color: string = 'blue';

  constructor(public optionSvc: OptionService, private paragraph: ParagraphService) { }
  ngOnInit(): void {
  this.paragraph.getList().then(res => {
    res.subscribe(d => {
      this.listPara = d;
      this.getParagraph();
      this.typeNow();
    })
  });
  }

  getParagraph(){
    let l = this.listPara as Array<string>;
    this.index = Math.floor(Math.random() * l.length);
    this.stringType = this.listPara[this.index];
    this.para = this.listPara[this.index].split(" ");
    this.paraLength = this.para.length;;
  }

  typerace(event: any){
    if(event.target.value == this.para[this.typeIndex] || event.target.value == '')
    {
      this.color = 'blue';
      this.backgroundColor = 'white';
      return;
    }
    if(event.target.value.indexOf(' ') >= 0)
      if(event.target.value == this.para[this.typeIndex] + ' '){
        this.typeIndex++;

        this.stringRight += event.target.value + ' ';
        this.stringNow = this.para[this.typeIndex];
        this.stringType = this.stringType.replace(this.stringNow, '');

        this.percentRight = this.typeIndex/this.paraLength * 100;
        event.target.value = '';
        return;
      }
    
    if(this.para[this.typeIndex].indexOf(event.target.value) < 0)
    {
      this.color = 'red';
      this.backgroundColor = 'rgb(209, 87, 105)';
      return;
    }
  }
  typeNow(){
    this.stringNow = this.para[this.typeIndex];
    this.stringType = this.stringType.replace(this.stringNow, '');
  }
}
