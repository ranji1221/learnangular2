import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

/*
const HEROES: Hero[] = [
	{ id: 11, name: 'Mr.Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];*/

@Component({
	selector: 'app-root',
	/*
  	template: `
  		<h1>{{title}}</h1>
  		<h2>{{hero.name}} Details!</h2>
  		<div><label>id: </label>{{hero.id}}</div>
  		<div>
  		<label>name: </label>
  		<input [(ngModel)]="hero.name">
  	</div>
  	`,*/
 	/*
	template: `
		<h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes">
				<!-- each hero goes here -->
				<span class="badge">{{hero.id}}</span>{{hero.name}}
			</li>
		</ul>
	`,*/
	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css'],
  	
  	providers: [HeroService]
})
export class AppComponent implements OnInit{
	//-- 1. Define Properties
	title = 'Tour of Heroes';
	/*
	hero: Hero = {
		id: 1,
		name: 'WindStorm'
	};*/
	//heroes = HEROES;
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
		//-- alert(hero.id);
	}

	getHeroes(): void {
		//this.heroes = this.heroService.getHeroes();
		//this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
}


