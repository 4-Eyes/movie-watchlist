import { Routes, RouterModule } from "@angular/router";
import { WatchListComponent } from "../components/watchlist.component";
import { MovieDetailComponent } from "../components/movie-detail.component";
import { StatsComponent } from "../components/stats.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', redirectTo: '/watchlist', pathMatch: 'full' },
    { path: 'watchlist', component: WatchListComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: 'stats', component: StatsComponent }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {
}
