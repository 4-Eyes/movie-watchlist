import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './components/app.component';
import { TMDBSearchComponent } from "./components/tmdb-search.component";
import { MovieDetailComponent } from "./components/movie-detail.component";
import { WatchListComponent } from "./components/watchlist.component";
import { StatsComponent } from "./components/stats.component";
import { MovieComponent }from './components/movie.component';

import { UtilityService } from "./services/utility.service";
import { TMDBService } from "./services/tmdb.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    WatchListComponent,
    StatsComponent,
    TMDBSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [
    UtilityService,
    TMDBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
