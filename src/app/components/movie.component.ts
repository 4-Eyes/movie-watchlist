import { Component } from '@angular/core';
import { Movie } from "../models/movie";
import { TMDBService } from "../services/tmdb.service";

@Component(
    {
        moduleId: module.id,
        selector: 'movie',
        templateUrl: './../html/movie.component.html'
    }
)
export class MovieComponent {
    movie: Movie = new Movie();

    constructor(private tmdbService: TMDBService) {
        this.movie.title = "Inception";
        this.movie.releaseDate = new Date("2010-07-14");
        this.movie.posterUrl = "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg";
    }
}
