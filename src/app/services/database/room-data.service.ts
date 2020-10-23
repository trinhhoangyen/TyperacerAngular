import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoomDataService {

  private _userInfo: {
    uid: string,
    name: string
  };

  private _roomId: string;
  get roomId() {
    return this.roomId;
  }

  private _listFriends: any;
  get listFriends() {
    return this._listFriends;
  }

  constructor(
    private agFireDatabase: AngularFireDatabase,
    private auth: AuthenticationService) {
      this._userInfo = auth.userInfo;
    }

  async CreatRoom(): Promise<string> {
    const roomId = this.agFireDatabase.createPushId();

    this.agFireDatabase
    .object(`room/friend-room/${ roomId }/${ this._userInfo.uid }`)
    .set({
      name: this._userInfo.name,
      score: 0
    }).then(() => {
      this._roomId = roomId;
    });

    return roomId;
  }

  async JoinInRoom(roomId: string): Promise<void> {
    const room = this.agFireDatabase
    .object(`room/friend-room/${ roomId }/${ this._userInfo.uid }`);

    room.valueChanges()
    .subscribe(res => {
      if (!res) {
        room.set({
          name: this._userInfo.name,
          score: 0
        })
        .then(() => {
          this._roomId = roomId;
        });
      }
    });

  }

  LeftRoom(roomId: string): void {
    this.agFireDatabase
    .object(`room/friend-room/${ roomId }/${ this._userInfo.uid }`)
    .remove();
    console.log(`room/friend-room/${ roomId }/${ this._userInfo.uid }`);
  }

  GetListFriends(roomId: string) {
    return this.agFireDatabase.object(`room/friend-room/${ roomId }`).valueChanges();
  }

}
