import { Component, OnInit } from '@angular/core';
import Hero from '../hero';
import {HeroService} from '../hero.service';
import {heroServiceProvider} from '../hero.service.provider';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';



@Component({
  selector: 'app-heroes',
  providers:  [heroServiceProvider],
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
