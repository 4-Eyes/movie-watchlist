import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";

@Injectable()
export class UtilityService {

    private posterUrl = "https://image.tmdb.org/t/p/original";

    tmdbResultToMovie(result: any): Movie {
        let movie = new Movie();
        movie.id = result.id;
        movie.releaseYear = result.release_date;
        movie.title = result.title;
        movie.posterUrl = result.poster_path ? this.posterUrl + result.poster_path : null;
        return movie;
    }
}
