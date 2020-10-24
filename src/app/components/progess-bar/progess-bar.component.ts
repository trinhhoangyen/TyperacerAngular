import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.scss']
})
export class ProgessBarComponent implements OnInit {
@Input() item;
displayName = '';
player;
  constructor(private playerSvc: PlayerService) { }

  ngOnInit(): void {
    this.playerSvc.getInfoPlayer(this.item[0]).subscribe(res => {this.player = res; console.log(res)});
  }

}
