import { Component, Input } from "@angular/core";
import { Movie } from "../models/movie";
import { Viewing } from "../models/viewing";
@Component(
    {
        moduleId: module.id,
        selector: 'movie-edit',
        templateUrl: './../html/movie-edit.component.html',
        styleUrls: ['./../css/movie-edit.component.css']
    }
)
export class MovieEditComponent {
    @Input() movie: Movie;

    constructor() {
    }

    addViewing(): void {
        this.movie.viewings.push(new Viewing)
    }

    deleteViewing(viewing: Viewing): void {
        let index = this.movie.viewings.indexOf(viewing);
        if (index > -1) {
            this.movie.viewings.splice(index, 1);
        }
    }
}
