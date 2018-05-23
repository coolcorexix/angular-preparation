import { Component, OnInit } from '@angular/core';
import Hero from '../hero';
import {HeroService} from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes);
  }
  delete(hero:Hero|number){
    this.heroes = this.heroes.filter(h=>h!==hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  searchHeroes(term: string): Observable<Hero[]>{
    if (!term.trim()){
    //if not search term, return empty hero array
    return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`.pipe(tap(_=>{console.log('retrieved');})
                              ,catchError(this.catchError<any>("search hero")));
  }
  add(name: string): void{
    name = name.trim();
    if (!name) return;
    this.heroService.addHero({name: name} as Hero).subscribe(hero=>this.heroes.push(hero));
  }
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }
}
