import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { UtilityService } from "./utility.service";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import 'rxjs/add/observable/of';

import { WATCHLIST } from "./data";
import {Cinema} from "../models/cinema";

@Injectable()
export class DataService {
    private apiUrl = "http://localhost:3000/api/";
    private init = false; // Change this value to true for first time initialisation of database

    constructor(private http: Http, private util: UtilityService) {
        if (this.init) {
            this.populateDB()
            this.init = false;
        }
    }

    getWatchlist(): Observable<Movie[]> {
        return this.http
            .get(this.apiUrl + "movies")
            .map((movies: any) => {
                let res: Movie[] = [];
                for (let movie of movies.json()) {
                    res.push(this.util.apiToMovie(movie));
                }
                return res;
            });
    }

    getMovie(movieId: number): Observable<Movie> {
        return this.http
            .get(this.apiUrl + "movie/" + movieId)
            .map((movie: any) => this.util.apiToMovie(movie.json()));
    }

    createMovie(movie: Movie): Observable<any> {
        return this.http
            .post(this.apiUrl + "movies", this.util.movieToApi(movie));
    }

    createCinema(cinema: Cinema): Observable<any> {
        return this.http
            .post(this.apiUrl + "cinemas", cinema);
    }

    /**
     * Only to be used for a first time initialisation of the database
     */
    private populateDB(): void {
        this.createCinema(this.util.cinemaToApi(WATCHLIST[0].viewings[0].cinema))
            .subscribe((res) => {
                let cinema = res.json() as Cinema;
                for (var movie of WATCHLIST) {
                    for (var i = 0; i < movie.viewings.length; i++) {
                        movie.viewings[i].cinema = cinema;
                    }
                    this.createMovie(movie)
                        .subscribe((thing) => {
                            console.log(thing);
                        });
                }
            });
    }
}
