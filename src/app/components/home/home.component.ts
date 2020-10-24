import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OptionService]
})
export class HomeComponent implements OnInit {

  constructor(public optionSvc: OptionService) { }

  ngOnInit(): void {
  }
}
