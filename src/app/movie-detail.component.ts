import { Component } from "@angular/core";
import { Movie } from "./models/movie";
import { TMDBService } from "./services/tmdb.service";

@Component(
    {
        moduleId: module.id,
        selector: 'movie-detail',
        templateUrl: './html/movie-detail.component.html'
    }
)
export class MovieDetailComponent {
    movie: Movie;
    editMode = false;

    constructor(private tmdbService: TMDBService) {}
}
