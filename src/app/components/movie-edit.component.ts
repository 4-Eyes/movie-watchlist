import { Component, Input } from "@angular/core";
import { Movie } from "../models/movie";
@Component(
    {
        moduleId: module.id,
        selector: 'movie-edit',
        templateUrl: './../html/movie-edit.component.html'
    }
)
export class MovieEditComponent {
    @Input() movie: Movie;
}
