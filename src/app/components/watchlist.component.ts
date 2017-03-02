import { Component } from "@angular/core";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import { DataService } from "../services/data.service";

@Component(
    {
        moduleId: module.id,
        selector: 'watchlist',
        templateUrl: './../html/watchlist.component.html'
    }
)
export class WatchListComponent {
    movies: Observable<Movie[]>;

    constructor(private dataService: DataService) {
        this.movies = dataService.getWatchlist();
    }
}
