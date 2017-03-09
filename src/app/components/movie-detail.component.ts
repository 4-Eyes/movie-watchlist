import { Component, OnInit } from "@angular/core";
import { Movie } from "./../models/movie";
import { TMDBService } from "./../services/tmdb.service";
import { ActivatedRoute, Params } from "@angular/router";
import { DataService } from "../services/data.service";
import { MaterializeDirective } from "angular2-materialize";
import { Observable } from "rxjs";

@Component(
    {
        moduleId: module.id,
        selector: 'movie-detail',
        templateUrl: './../html/movie-detail.component.html',
        styleUrls: ['./../css/movie-detail.component.css']
    }
)
export class MovieDetailComponent implements OnInit {
    movie: Movie;
    editMode = false;

    constructor(private tmdbService: TMDBService,
                private route: ActivatedRoute,
                private dataService: DataService) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => {
                return this.dataService.getMovie(+params['id']);
            })
            .subscribe(movie => this.movie = movie);
    }
}
