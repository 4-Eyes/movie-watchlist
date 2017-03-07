import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { UtilityService } from "./utility.service";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import { Cinema } from "../models/cinema";

@Injectable()
export class DataService {
    private apiUrl = "http://localhost:3000/api/";

    constructor(private http: Http, private util: UtilityService) {
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

    getCinemas(): Observable<Cinema[]> {
        return this.http
            .get(this.apiUrl + "cinemas")
            .map((cinemas: any) => cinemas.json() as Cinema[])
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
}
