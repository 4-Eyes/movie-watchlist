import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { UtilityService } from "./utility.service";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import 'rxjs/add/observable/of';

import { WATCHLIST } from "./data";

@Injectable()
export class DataService {
    private apiUrl = "http://localhost:3000/api/";

    constructor(private http: Http, private util: UtilityService) {
    }

    getWatchlist(): Observable<Movie[]> {
        return this.http.get(this.apiUrl + "movies")
            .map((movies: any) => {
                let res: Movie[] = [];
                for (let movie of movies.json()) {
                    res.push(this.util.apiToMovie(movie));
                }
                return res;
            });
    }

    getMovie(movieId: number): Observable<Movie> {
        return this.http.get(this.apiUrl + "movie/" + movieId)
            .map((movie: any) => this.util.apiToMovie(movie.json()));
    }
}
