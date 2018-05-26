import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import{UserService} from '../user.service';
import{Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material/core';
export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}
export class UsernameErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective|NgForm|null): boolean{
    const isSubmitted = form && form.submitted;
    return !!(control&&control.invalid&&(control.dirty||control.touched||isSubmitted));
  }
}

@Component({
  selector: 'app-hero-login',
  templateUrl: './hero-login.component.html',
  styleUrls: ['./hero-login.component.css']
})
export class HeroLoginComponent implements OnInit {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  userFormControl = new FormControl('superuser',[
    Validators.required
  ]);
  matcher = new UsernameErrorStateMatcher();


  checkAuth(value: string): void{
    if (value=="superuser")
    {
            this.userService.isAuthorized = true;
            this.router.navigate(['/heroes']);
            return;
    }
    alert('Invalid');

  }
  constructor(private userService: UserService, private router: Router) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
                        .pipe(
                        startWith(''),
                        map(state => state ? this.filterStates(state) : this.states.slice())
                        );
  }
  filterStates(name: string) {
  return this.states.filter(state =>
    state.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
  }

  ngOnInit() {
  }

}
