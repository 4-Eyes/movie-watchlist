import { Component, EventEmitter } from "@angular/core";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import { DataService } from "../services/data.service";
import { MaterializeAction } from "angular2-materialize";

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

    modalActions = new EventEmitter<string|MaterializeAction>();

    addMovie(): void {
        //Add the movie/do validation
        this.modalActions.emit({action:"modal", params:['close']});
    }

    openModal(): void {
        this.modalActions.emit({action:"modal", params:['open']});
    }
}
