import {Component, Input} from '@angular/core';

import {Hero} from './hero';

@Component({
	selector: 'my_hero_detail',
	templateUrl: './hero_detail.component.html',
	styleUrls: ['./hero_detail.component.css']
})
export class HeroDetailComponent {
	@Input()
	hero: Hero;
}
