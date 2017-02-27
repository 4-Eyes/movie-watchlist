import { Component } from "@angular/core";
import { Movie } from "./models/movie";

@Component(
    {
        moduleId: module.id,
        selector: 'movie-detail',
        templateUrl: './html/movie-detail.component.html'
    }
)
export class MovieDetailComponent {
    movie: Movie;
}
