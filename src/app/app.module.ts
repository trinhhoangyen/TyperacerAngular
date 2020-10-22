import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HighScoreComponent } from './components/high-score/high-score.component';
import { ChooseOptionComponent } from './components/option/choose-option/choose-option.component';
import { PracticeComponent } from './components/option/practice/practice.component';
import { RaceComponent } from './components/option/race/race.component';
import { PlayerComponent } from './components/player/player.component';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    HighScoreComponent,
    ChooseOptionComponent,
    PracticeComponent,
    RaceComponent,
    PlayerComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ],
  providers: [AngularFireDatabase, AngularFireAuth],
  bootstrap: [AppComponent, TopBarComponent]
})
export class AppModule { }
