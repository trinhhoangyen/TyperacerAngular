import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionService } from 'src/app/services/option.service';
import { RoomDataService } from '../../../services/database/room-data.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  constructor(
    private router: Router,
    public optionSvc: OptionService,
    private roomdataSvc: RoomDataService) { }

  ngOnInit(): void {
  }

  CreatNewRoom() {
    this.roomdataSvc.CreatRoom()
    .then((roomId) => {
      this.router.navigate(['room'], { queryParams: { roomId: roomId }} );
    });
  }

  JoinInRoom(roomId) {
    this.roomdataSvc.JoinInRoom(roomId)
    .then(() => {
      this.router.navigate(['room'], { queryParams: { roomId: roomId }} );
    });
  }
}
