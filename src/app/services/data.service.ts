import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { UtilityService } from "./utility.service";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import { Cinema } from "../models/cinema";
import { IDataService } from "./data-service.interface";
import { LoggerService } from "./logger.service";
import { logger } from "codelyzer/util/logger";

@Injectable()
export class DataService implements IDataService {

    private apiUrl = "http://localhost:3000/api/";

    constructor(private http: Http,
                private util: UtilityService,
                private loggerService: LoggerService) {
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
            })
            .catch(err => {
                let errMsg = this.processError(err);
                this.loggerService.error(errMsg, this, "getWatchlist()");
                return Observable.throw(errMsg);
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

    getCinema(cinemaId: number): Observable<Cinema> {
        return undefined;
    }

    updateMovie(movieId: number, movie: Movie): Observable<any> {
        return undefined;
    }

    updateCinema(cinemaId: number, cinema: Cinema): Observable<any> {
        return undefined;
    }

    deleteMovie(cinemaId: number): Observable<any> {
        return undefined;
    }

    deleteCinema(cinemaId: number): Observable<any> {
        return undefined;
    }

    private processError(err: any): string {
        let errMessage: string;
        if (err instanceof Response) {
            const body = err.json() || '';
            const error = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
        } else {
            errMessage = err.message ? err.message : err.toString();
        }
        return errMessage;
    }
}
