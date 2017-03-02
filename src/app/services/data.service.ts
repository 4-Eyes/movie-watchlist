import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { UtilityService } from "./utility.service";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import 'rxjs/add/observable/of';

import { WATCHLIST } from "./data";

@Injectable()
export class DataService {
    private apiUrl = "";

    constructor(private http: Http, private util: UtilityService) {
    }

    getWatchlist(): Observable<Movie[]> {
        return Observable.of<Movie[]>(WATCHLIST);
    }

    getMovie(movieId: number): Observable<Movie> {
        return Observable.of<Movie>(WATCHLIST.filter(movie => movie.id === movieId).pop());
    }
}
