import { Injectable } from '@angular/core';
import {  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let url: string  = state.url;
    return this.checkLogIn(url);
  }
  checkLogIn(url: string): boolean{
    if (this.userService.isAuthorized)
      {return true;}
    //store the attempted URL for redirecting
    this.userService.redirectUrl = url;
    alert("không có cửa");
    //Navigate to the login page with extras
    this.router.navigate([""]);
    return false;
  }
  constructor(private userService: UserService, private router: Router) { }
}
