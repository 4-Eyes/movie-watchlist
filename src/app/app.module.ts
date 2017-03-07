import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterializeModule } from "angular2-materialize";
import { AppComponent } from "./components/app.component";
import { TMDBSearchComponent } from "./components/tmdb-search.component";
import { MovieDetailComponent } from "./components/movie-detail.component";
import { WatchListComponent } from "./components/watchlist.component";
import { StatsComponent } from "./components/stats.component";
import { MovieComponent } from "./components/movie.component";
import { UtilityService } from "./services/utility.service";
import { TMDBService } from "./services/tmdb.service";
import { DataService } from "./services/data.service";
import { AppRoutingModule } from "./routing/app-routing.module";
import { MovieEditComponent } from "./components/movie-edit.component";
import { ViewingEditComponent } from "./components/viewing-edit.component";

@NgModule(
    {
        declarations: [
            AppComponent,
            MovieComponent,
            MovieDetailComponent,
            WatchListComponent,
            StatsComponent,
            TMDBSearchComponent,
            MovieEditComponent,
            ViewingEditComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            MaterializeModule,
            AppRoutingModule
        ],
        providers: [
            UtilityService,
            TMDBService,
            DataService
        ],
        bootstrap: [AppComponent]
    }
)
export class AppModule {
}
