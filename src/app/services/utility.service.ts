import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs";
import { TMDBConfig } from "../models/tmdb-config";

@Injectable()
export class UtilityService {

    constructor(private http: Http) {
    }

    tmdbResultToMovie(result: any): Movie {
        let movie = new Movie();
        movie._id = result.id;
        movie.releaseDate = result.release_date;
        movie.title = result.title;
        movie.posterUrl = result.poster_path ? result.poster_path : null;
        movie.imdbId = result.imdb_id ? result.imdb_id : null;
        return movie;
    }

    loadJson(path: string): Observable<any> {
        return this.http
            .get(path)
            .map(res => res.json());
    }

    tmdbConfigParser(result: any): TMDBConfig {
        let config = new TMDBConfig();
        config.imageBaseUrl = result.images.secure_base_url;
        config.posterSizes = result.images.poster_sizes;
        return config;
    }

    apiToMovie(apiMovie: any): Movie {
        let movie = apiMovie as Movie;
        movie.releaseDate = new Date(apiMovie.releaseDate);
        return movie;
    }
}
