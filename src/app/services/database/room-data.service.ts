import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RoomDataService {
  private _userInfo: {
    uid: string;
    name: string;
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
    private auth: AuthenticationService
  ) {
    this._userInfo = auth.userInfo;
  }
  GetIndexParagraph(roomId: string) {
    return this.agFireDatabase
      .object(`room/friend-room/${roomId}/indexParagraph`)
      .valueChanges();
  }
  SaveParagraph(roomId) {
    this.agFireDatabase.object(`room/friend-room/${roomId}`).update({
      indexParagraph: Math.floor(Math.random() * 4),
    });
  }

  async CreatRoom(): Promise<string> {
    const roomId = this.agFireDatabase.createPushId();

    this.agFireDatabase
      .object(`room/friend-room/${roomId}/players/${this._userInfo.uid}`)
      .set({
        name: this._userInfo.name,
        score: 0,
      })
      .then(() => {
        this._roomId = roomId;
      });
    this.SaveParagraph(roomId);
    return roomId;
  }

  async JoinInRoom(roomId: string): Promise<void> {
    const room = this.agFireDatabase.object(
      `room/friend-room/${roomId}/players/${this._userInfo.uid}`
    );

    room.valueChanges().subscribe((res) => {
      if (!res) {
        room
          .set({
            name: this._userInfo.name,
            score: 0,
          })
          .then(() => {
            this._roomId = roomId;
          });
      }
    });
  }

  LeftRoom(roomId: string): void {
    this.agFireDatabase
      .object(`room/friend-room/${roomId}/players/${this._userInfo.uid}`)
      .remove();
  }

  GetListFriends(roomId: string) {
    return this.agFireDatabase
      .object(`room/friend-room/${roomId}/players`)
      .valueChanges();
  }
}
