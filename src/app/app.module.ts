import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
import { RoomComponent } from './components/room/room.component';
import { ProgessBarComponent } from './components/progess-bar/progess-bar.component';
import { TypeTextComponent } from './components/type-text/type-text.component';
import { OptionService } from './services/option.service';
import { ParagraphService } from './services/paragraph.service';
import { CountdownModule } from 'ngx-countdown';

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
    RoomComponent,
    ProgessBarComponent,
    TypeTextComponent,
    // CountdownModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CountdownModule,
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    OptionService,
    ParagraphService,
  ],
  bootstrap: [AppComponent, TopBarComponent],
})
export class AppModule {}
