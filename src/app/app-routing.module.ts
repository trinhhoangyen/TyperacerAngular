import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';

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
  }
 }
