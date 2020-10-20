import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { HighScoreComponent } from './high-score/high-score.component';
import { ChooseOptionComponent } from './option/choose-option/choose-option.component';
import { PracticeComponent } from './option/practice/practice.component';
import { RaceComponent } from './option/race/race.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent, TopBarComponent, HomeComponent, HighScoreComponent, ChooseOptionComponent, PracticeComponent, RaceComponent, PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebase),
    ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent, TopBarComponent]
})
export class AppModule { }
