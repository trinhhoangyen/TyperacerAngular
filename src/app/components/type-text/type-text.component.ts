import { Component, OnInit, Input } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';
import { ParagraphService } from 'src/app/services/paragraph.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-type-text',
  templateUrl: './type-text.component.html',
  styleUrls: ['./type-text.component.scss'],
})
export class TypeTextComponent implements OnInit {
  @Input() players: { name: string; percent: number; color: string }[] = [];

  typeIndex = 0;
  listWord = [];
  paragraph = '';
  paraLength = 0;
  percentRight = 0;
  stringRight = '';
  stringNow = '';
  stringType = '';
  items: any;
  backgroundColor = 'white';
  color = 'blue';
  name:string;

  constructor(
    public optionSvc: OptionService,
    private paragraphSvc: ParagraphService,
    private fireService: AuthenticationService
  ) {}
  ngOnInit(): void {
    if (this.fireService.userInfo)
      this.name = this.fireService.userInfo.name || 'No login';
  }

  ngAfterViewInit(): void {
    this.paragraphSvc.get();
    this.items = this.paragraphSvc.para;
    this.paragraphSvc.para.subscribe((res) => {
      this.paragraph = res[0].content;
      this.stringType = this.paragraph;
      this.listWord = this.paragraph.split(' ');
      this.paraLength = this.listWord.length;
      this.typeNow();
    });
  }

  typerace(event) {
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
    } else if (this.color != 'blue') {
      this.color = 'blue';
      this.backgroundColor = 'white';
    }
  }
  typeNow() {
    this.stringNow = this.listWord[this.typeIndex];
    this.stringType = this.stringType.replace(this.stringNow, '');
  }
}
