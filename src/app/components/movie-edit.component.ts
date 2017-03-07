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
        this.movie = {
            _id: 1771,
            imdbId: "",
            overview: "Predominantly set during World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
            releaseDate: new Date("2011-07-22"),
            posterUrl: "/dlIPGXPxXQTp9kFrRzn0RsfUelx.jpg",
            title: "Captain America: The First Avenger",
            viewings: [
            ]
        }
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
