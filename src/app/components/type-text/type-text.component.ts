import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';
import { ParagraphService } from 'src/app/services/paragraph.service';

@Component({
  selector: 'app-type-text',
  templateUrl: './type-text.component.html',
  styleUrls: ['./type-text.component.scss'],
})
export class TypeTextComponent implements OnInit {
  @Input() paragraph;
  @Output() handleSubmit = new EventEmitter();

  typeIndex = 0;
  listWord = [];
  paraLength = 0;
  stringRight = '';
  stringNow = '';
  stringType = '';

  percentRight = 0;
  backgroundColor = 'white';
  color = 'blue';
  name = 'ahihi';

  constructor(public optionSvc: OptionService) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.stringType = this.paragraph;
    this.listWord = this.paragraph.split(' ');
    this.paraLength = this.listWord.length;
    this.typeNow();
  }
  typerace(event: any) {
    if (
      event.target.value === this.listWord[this.typeIndex] ||
      event.target.value === ''
    ) {
      this.color = 'blue';
      this.backgroundColor = 'white';
      return;
    }
    if (event.target.value.indexOf(' ') >= 0) {
      if (event.target.value === this.listWord[this.typeIndex] + ' ') {
        this.typeIndex++;

        this.stringRight += event.target.value + ' ';
        this.stringNow = this.listWord[this.typeIndex];
        this.stringType = this.stringType.replace(this.stringNow, '');

        this.percentRight = (this.typeIndex / this.paraLength) * 100;
        event.target.value = '';
        return;
      }
    }

    if (this.listWord[this.typeIndex].indexOf(event.target.value) < 0) {
      this.color = 'red';
      this.backgroundColor = 'rgb(209, 87, 105)';
      return;
    }
  }
  typeNow() {
    this.stringNow = this.listWord[this.typeIndex];
    this.stringType = this.stringType.replace(this.stringNow, '');
  }
}
