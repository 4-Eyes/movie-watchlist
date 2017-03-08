import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";
import { Cinema } from "../models/cinema";
import { MOVIES, CINEMAS } from "./dummy-data";
import { LoggerService } from "./logger.service";
import { IDataService } from "./data-service.interface";

@Injectable()
export class DummyDataService implements IDataService {

    constructor(private loggerService: LoggerService) {
    }

    getWatchlist(): Observable<Movie[]> {
        return Observable.of<Movie[]>(MOVIES)
    }

    getCinemas(): Observable<Cinema[]> {
        return Observable.of<Cinema[]>(CINEMAS)
    }

    getMovie(movieId: number): Observable<Movie> {
        let res = MOVIES.filter((movie) => movie._id == movieId);
        if (res.length == 0) {
            this.loggerService.error(
                `Error in getting movie with given id - ${movieId}. Movie does not exist.`,
                this, "getMovie");
            return Observable.of<Movie>();
        }
        return Observable.of<Movie>(res[0])
    }

    getCinema(cinemaId: number): Observable<Cinema> {
        let res = CINEMAS.filter((movie) => movie._id == cinemaId);
        if (res.length == 0) {
            this.loggerService.error(
                `Error in getting cinema with given id - ${cinemaId}. Cinema does not exist.`,
                this, "getCinema");
            return Observable.of<Cinema>();
        }
        return Observable.of<Cinema>(res[0])
    }

    createMovie(movie: Movie): Observable<any> {
        MOVIES.push(movie);
        return Observable.of<any>()
    }

    createCinema(cinema: Cinema): Observable<any> {
        CINEMAS.push(cinema);
        return Observable.of<Movie[]>()
    }

    updateMovie(movieId: number, movie: Movie): Observable<any> {
        // Not truly updating, but it'll do
        this.deleteMovie(movieId);
        this.createMovie(movie);
        return Observable.of<any>();
    }

    updateCinema(cinemaId: number, cinema: Cinema): Observable<any> {
        // Not truly updating, but it'll do
        this.deleteCinema(cinemaId);
        this.createCinema(cinema);
        return Observable.of<any>();
    }

    deleteMovie(movieId: number): Observable<any> {
        let idx = MOVIES.findIndex((movie) => movie._id == movieId);
        MOVIES.splice(idx, 1);
        return Observable.of<any>();
    }

    deleteCinema(cinemaId: number): Observable<any> {
        let idx = CINEMAS.findIndex((cinema) => cinema._id == cinemaId);
        CINEMAS.splice(idx, 1);
        return Observable.of<any>();
    }
}
