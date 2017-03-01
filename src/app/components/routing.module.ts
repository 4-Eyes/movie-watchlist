import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MovieDetailComponent } from "./../components/movie-detail.component";
import { StatsComponent } from "./../components/stats.component";
import { WatchListComponent } from "./../components/watchlist.component";

const routes: Routes = [
    { path: '', redirectTo: '/watchlist', pathMatch: 'full' },
    { path: 'watchlist', component: WatchListComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'movie/:id', component: MovieDetailComponent }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class RoutingModule {
}
