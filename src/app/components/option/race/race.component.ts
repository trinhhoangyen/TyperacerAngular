import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  constructor(public optionSvc: OptionService) { }

  ngOnInit(): void {
  }

}
