import { Component, OnInit, Input } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';
import { ParagraphService } from 'src/app/services/paragraph.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RaceService } from 'src/app/services/race.service';
import Races from 'src/interfaces/race.interface';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { RoomDataService } from '../../services/database/room-data.service';

@Component({
  selector: 'app-type-text',
  templateUrl: './type-text.component.html',
  styleUrls: ['./type-text.component.scss'],
})
export class TypeTextComponent implements OnInit {
  listFriends;
  indexParagraph;

  typeIndex = 0;
  listWord = [];
  paragraph = '';
  paraLength = 0;
  percentRight = 0;
  stringRight = '';
  stringNow = '';
  stringType = '';
  items: any;
  backgroundColor = 'white';
  color = 'blue';
  name: string;
  userId: string;
  race: Races;
  roomId: string;
  canRun = false;

  constructor(
    public optionSvc: OptionService,
    private paragraphSvc: ParagraphService,
    private fireService: AuthenticationService,
    private races: RaceService,
    private auth: AuthenticationService,
    private activeRoute: ActivatedRoute,
    private player: PlayerService,
    private roomDataSvc: RoomDataService
  ) {}
  ngOnInit(): void {
    if (this.fireService.userInfo){
      this.name = this.fireService.userInfo.name || 'No login';
    }

    this.userId = this.auth.userInfo.uid;

    this.activeRoute.queryParams.subscribe((params) => {
      this.roomId = params['roomId'];
      this.roomDataSvc.GetListFriends(this.roomId).subscribe((res) => {
        const temp: Object = res;
        if (res) {
          this.listFriends = Object.values(temp);
        }
        console.log(this.listFriends);
      });

      this.roomDataSvc.GetReady(this.roomId).subscribe((res) => {
        this.canRun = res['ready'];
      });

      this.roomDataSvc.GetIndexParagraph(this.roomId).subscribe((res) => {
        this.indexParagraph = res;
        console.log(this.indexParagraph);
        console.log(this.roomId);

        this.ngAfterOnInit();
      });
    });
  }

  ngAfterOnInit(): void {
    this.paragraphSvc.getById(this.indexParagraph);
    this.items = this.paragraphSvc.para;
    this.paragraphSvc.para.subscribe((res) => {
      this.paragraph = res[0].content;
      this.stringType = this.paragraph;
      this.listWord = this.paragraph.split(' ');
      this.paraLength = this.listWord.length;
      this.typeNow();
    });
  }

  typerace(event) {
    if (event.target.value.indexOf(' ') >= 0) {
      if (this.typeIndex === this.paraLength - 1) {
        console.log('chay dc');
        this.race = {
          date: new Date().getTime().toString(),
          point: 0,
          wpm: 50,
        };
        this.races.addRace(this.race, this.userId);
      }
      if (event.target.value === this.listWord[this.typeIndex] + ' ') {
        this.typeIndex++;

        this.stringRight += event.target.value + ' ';
        this.stringNow = this.listWord[this.typeIndex];
        this.stringType = this.stringType.replace(this.stringNow, '');

        this.percentRight = (this.typeIndex / this.paraLength) * 100;
        this.player.setPercentOfPlayer(
          this.roomId,
          this.userId,
          this.percentRight
        );
        event.target.value = '';
        return;
      }
    }

    if (this.listWord[this.typeIndex].indexOf(event.target.value) < 0) {
      this.color = 'red';
      this.backgroundColor = 'rgb(209, 87, 105)';
    } else if (this.color != 'blue') {
      this.color = 'blue';
      this.backgroundColor = 'white';
    }
  }

  typeNow() {
    this.stringNow = this.listWord[this.typeIndex];
    this.stringType = this.stringType.replace(this.stringNow, '');
  }

  ReadyClick() {
    this.roomDataSvc.ReadyClick(this.roomId);
  }
}
