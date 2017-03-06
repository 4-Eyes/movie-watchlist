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

    constructor() {
        this.movie = {
            _id: 1771,
            imdbId: "",
            overview: "Predominantly set during World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
            releaseDate: new Date("2011-07-22"),
            posterUrl: "/dlIPGXPxXQTp9kFrRzn0RsfUelx.jpg",
            title: "Captain America: The First Avenger",
            viewings: [
                {
                    id: 0,
                    date: new Date("2016-07-21"),
                    cinema: {
                        _id: 0,
                        name: "Readings The Palms",
                        location: {
                            latitude: 0,
                            longitude: 0,
                        }
                    },
                    rewatch: false
                },
            ]
        }
    }
}
