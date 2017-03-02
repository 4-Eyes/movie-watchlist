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
    @Input() movie: Movie = new Movie();

    constructor(private tmdbService: TMDBService) {
        this.movie.title = "Inception";
        this.movie.releaseDate = new Date("2010-07-14");
        // this.movie.posterUrl = "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg";
        this.movie.viewings = [
            {
                id: 0,
                date: new Date("2016-07-21"),
                cinema: {
                    id: 0,
                    name: "Readings The Palms",
                    location: {
                        latitude: -43.5073936,
                        longitude: 172.6618957,
                    }
                },
                rewatch: false
            },
            {
                id: 1,
                date: new Date("2016-08-10"),
                cinema: {
                    id: 0,
                    name: "Readings The Palms",
                    location: {
                        latitude: -43.5073936,
                        longitude: 172.6618957,
                    }
                },
                rewatch: true
            },
        ];
        this.movie.overview = "Predominantly set during World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination. Predominantly set during World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.";
    }
}
