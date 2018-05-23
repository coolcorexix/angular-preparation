import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>;
  constructor(private heroService: HeroService) { }
  search(term: string): void{
    this.searchTerms.next(term);
  }


  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      //wait 300ms before considering term
      debounceTime(300),
      //ignore if there nothing new
      distinctUntilChanged(),
      //swicth to new search observeable each time the term changes
      switchMap((term: string)=>this.heroService.searchHeroes(term))
    );
  }

}
