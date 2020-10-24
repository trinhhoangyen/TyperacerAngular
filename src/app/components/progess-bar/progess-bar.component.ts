import { Component, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.scss'],
})
export class ProgessBarComponent{
  @Input() name: string;
  @Input() percent: number;
  @Input() color: string;
}
