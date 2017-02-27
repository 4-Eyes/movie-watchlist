import { Component } from '@angular/core';
import { Movie } from "./models/movie";

@Component(
    {
        moduleId: module.id,
        selector: 'movie',
        templateUrl: './html/movie.component.html'
    }
)
export class MovieComponent {
    movie: Movie;
}
