import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomDataService } from '../../services/database/room-data.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy {

  roomId: string;
  listFriends: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private roomDataSvc: RoomDataService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.roomId = params['roomId'];

      this.roomDataSvc.GetListFriends(this.roomId)
      .subscribe(res => {
        const temp:Object = res;
        if (res) {
          this.listFriends = Object.keys(temp).map((key) => [(key), Number(temp[key])]);
        }
      });
    });
  }

  ngOnDestroy():void {
    this.roomDataSvc.LeftRoom(this.roomId);
  }
}
