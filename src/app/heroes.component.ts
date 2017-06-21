import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
  	styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit{
	//-- 1. Define Properties
	heroes: Hero[];
	selectedHero: Hero;
	
	//--2. Define Constructor
	constructor(
		private router: Router,
		private heroService: HeroService
	){}
	
	//--3. Interface Method
	ngOnInit(): void {
		this.getHeroes();
	}
 
	//--3. Define Method
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	gotoDetail(): void {
		this.router.navigate(['/detail',this.selectedHero.id]);
	}
}


