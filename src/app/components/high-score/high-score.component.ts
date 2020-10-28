import { Component, OnInit } from '@angular/core';
import { RaceService } from 'src/app/services/race.service';
import Races from 'src/interfaces/race.interface';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.scss'],
})
export class HighScoreComponent implements OnInit {
  listHighScore: Array<Races>;
  userId:string;
  
  constructor(
    private race: RaceService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.userId = this.auth.userInfo.uid;
    this.race.getList(this.userId).subscribe((c) => {
      this.listHighScore = c;
    });
  }
}
