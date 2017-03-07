import { Observable } from "rxjs";
import { Movie } from "../models/movie";
import { Cinema } from "../models/cinema";

export interface IDataService {
    // Getting all objects
    getWatchlist(): Observable<Movie[]>;

    getCinemas(): Observable<Cinema[]>;

    // Get objects by id
    getMovie(movieId: number): Observable<Movie>;

    getCinema(cinemaId: number): Observable<Cinema>;

    // Create new objects
    createMovie(movie: Movie): Observable<any>;

    createCinema(cinema: Cinema): Observable<any>;

    // Update existing objects
    updateMovie(movieId: number, movie: Movie): Observable<any>;

    updateCinema(cinemaId: number, cinema: Cinema): Observable<any>;

    // Delete existing objects
    deleteMovie(movieId: number): Observable<any>;

    deleteCinema(cinemaId: number): Observable<any>;
}
