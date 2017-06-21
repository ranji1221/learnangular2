import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
  	styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit{
	//-- 1. Define Properties
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;
	
	//--2. Define Constructor
	constructor(private heroService: HeroService){}
	
	//--3. Interface Method
	ngOnInit(): void {
		this.getHeroes();
	}
 
	//--3. Define Method
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
}


