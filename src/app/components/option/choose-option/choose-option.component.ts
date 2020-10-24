import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
  styleUrls: ['./choose-option.component.scss']
})
export class ChooseOptionComponent implements OnInit {
  constructor(private optionSvc: OptionService) { }

  ngOnInit(): void {
  }

  changeChild(value: number){
    this.optionSvc.OptionValue = value;
  }

}
