import { Component, OnInit } from '@angular/core';
import { RaceService } from 'src/app/services/race.service';
import Races from 'src/interfaces/race.interface';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.scss'],
})
export class HighScoreComponent implements OnInit {
  listHighScore: Array<Races>;

  constructor(private race: RaceService) {};

  ngOnInit(): void {
    this.race.getList().subscribe((c) => {
      this.listHighScore = c;
    });
  }
}
