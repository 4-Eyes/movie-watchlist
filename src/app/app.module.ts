import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MovieComponent }from './movie.component';
import { RoutingModule } from "./routing.module";
import { MovieDetailComponent } from "./movie-detail.component";
import { WatchListComponent } from "./watchlist.component";
import { StatsComponent } from "./stats.component";
import { UtilityService } from "./services/utility.service";
import { TMDBService } from "./services/tmdb.service";
import { TMDBSearchComponent } from "./tmdb-search.component";
import { HttpModule } from "@angular/http";

@NgModule(
    {
        imports: [
            BrowserModule,
            //RoutingModule,
            HttpModule
        ],
        declarations: [
            AppComponent,
            MovieComponent,
            MovieDetailComponent,
            WatchListComponent,
            StatsComponent,
            TMDBSearchComponent
        ],
        providers: [
            UtilityService,
            TMDBService
        ],
        bootstrap: [AppComponent]
    }
)
export class AppModule {
}
