import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRouteModule } from './app.route.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero_detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

@NgModule({
	imports: [
    BrowserModule,
    FormsModule,
  	AppRouteModule
  ],
  
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  
  providers: [
  	HeroService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
