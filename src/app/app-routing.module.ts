import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment} from '../environments/environment'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes = [
  { path: 'login', component: LoginComponent},
  // { path: 'race', component: RacetrackComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
]
@NgModule({
  declarations: [
    LoginComponent,
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
