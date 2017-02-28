import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs";

@Injectable()
export class UtilityService {

    private posterUrl = "https://image.tmdb.org/t/p/original";

    constructor(private http: Http) {
    }

    tmdbResultToMovie(result: any): Movie {
        let movie = new Movie();
        movie.id = result.id;
        movie.releaseYear = result.release_date;
        movie.title = result.title;
        movie.posterUrl = result.poster_path ? this.posterUrl + result.poster_path : null;
        return movie;
    }

    loadJson(path: string): Observable<any> {
        return this.http
            .get(path)
            .map(res => res.json());
    }
}
