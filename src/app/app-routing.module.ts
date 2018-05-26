import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroLoginComponent} from './hero-login/hero-login.component';
import {AuthGuardService} from './auth-guard.service';

const routeAuth: Routes =[
  {
    path: 'hero-login',
    component: HeroLoginComponent
  }
]
const routes: Routes = [
  {
    path:'',
    canActivate: [AuthGuardService],
    children:[
      {
        path:'',
        children:[
          {path: 'heroes', component: HeroesComponent},
          {path: 'dashboard', component: DashboardComponent},

          {path: '', redirectTo: '/hero-login', pathMatch:'full'},
          {path: 'details/:id', component: HeroDetailComponent}
        ]
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routeAuth),
            RouterModule.forChild(routes)],
  exports:
  [RouterModule]
})

export class AppRoutingModule { }
