import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment} from '../environments/environment'
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';

const appRoutes = [
  { path: 'player', component: PlayerComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
]
@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log(environment.firebase)
  }
 }
