import { Component, EventEmitter, OnInit } from "@angular/core";
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
export class WatchListComponent implements OnInit {
    movies: Observable<Movie[]>;
    newMovie: Movie = new Movie();

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.movies = this.dataService.getWatchlist();
    }

    modalActions = new EventEmitter<string|MaterializeAction>();

    addMovie(): void {
        this.modalActions.emit({action:"modal", params:['close']});
    }

    openModal(): void {
        this.modalActions.emit({action:"modal", params:['open']});
    }

    cancelAdd(): void {
        this.newMovie = new Movie();
    }
}
