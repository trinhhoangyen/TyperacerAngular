import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { RoomComponent } from './components/room/room.component';

const appRoutes = [
  { path: 'player', component: PlayerComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
  { path: 'room', component: RoomComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
