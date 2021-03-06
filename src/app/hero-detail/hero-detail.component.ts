import { Component, OnInit, Input } from '@angular/core';
import Hero from '../hero';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {heroServiceProvider} from '../hero.service.provider';


@Component({
  selector: 'app-hero-detail',
  providers:  [heroServiceProvider],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  save(): void{
    this.heroService.updateHero(this.hero).subscribe(()=>this.goBack());
  }
  goBack():  void{
    this.location.back();
  }
  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }
  getHero(): void{
      const id= +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id).subscribe(hero=>{console.log(JSON.stringify(hero));this.hero=hero[0];});
  }

  ngOnInit() {
    this.getHero();
  }

}
