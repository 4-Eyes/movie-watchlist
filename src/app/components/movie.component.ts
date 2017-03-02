import { Component, Input } from '@angular/core';
import { Movie } from "../models/movie";
import { TMDBService } from "../services/tmdb.service";

@Component(
    {
        moduleId: module.id,
        selector: 'movie-card',
        templateUrl: './../html/movie.component.html',
        styleUrls: ['./../css/movie.component.css']
    }
)
export class MovieComponent {
    @Input() movie: Movie;

    constructor(private tmdbService: TMDBService) {
    }
}
