import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuthorized: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  login(): Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap(val=> this.isAuthorized = true)
    );

  }
  logout(): void{
    this.isAuthorized = false;
  }
  constructor() { }
}
