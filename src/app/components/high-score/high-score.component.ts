import { Component, OnInit } from '@angular/core';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.scss']
})
export class HighScoreComponent implements OnInit {
  listHighScore = [];

  constructor(private race: RaceService) { }

  ngOnInit(): void {
    this.getListHighScore()
  }

  getListHighScore(){
    this.race.getList().then(res=> res.subscribe(d => {
      this.listHighScore = d as Array<object>;
      // this.listHighScore.filter(item =>{
      //   return item.
      // })
      // console.log(this.listHighScore)
    }))
  }

}
