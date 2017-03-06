import { OnInit, Component, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'

import { Movie } from "../models/movie";
import { TMDBService } from "../services/tmdb.service";

@Component(
    {
        moduleId: module.id,
        selector: "tmdb-search",
        templateUrl: './../html/tmdb-search.component.html',
        styleUrls: [ './../css/tmdb-search.component.css']
    }
)

export class TMDBSearchComponent implements OnInit {
    movies: Observable<Movie[]>;
    private searchTerms = new Subject<string>();
    @Input() selectedMovie: Movie;
    selectedIndex: number = -1;
    moviesLength = 0;
    queryString: string = "";

    constructor(private tmdbService: TMDBService) {}

    search(event: any): void {
        if (event.code === "ArrowDown" && this.selectedIndex < this.moviesLength) {
            this.selectedIndex++;
        } else if (event.code === "ArrowUp" && this.selectedIndex > 0) {
            this.selectedIndex--;
        } else {
            // this.selectedMovie = null;
            this.searchTerms.next(this.queryString);
        }
    }

    ngOnInit(): void {
        if (this.selectedMovie) {
            this.queryString = this.selectedMovie.title;
        }
        this.searchTerms
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(term => term ? this.tmdbService.search(term) : Observable.of<Movie[]>([]))
            .subscribe(list => {
                this.moviesLength = list.length;
                this.movies = Observable.of<Movie[]>(list);
            });
    }

    select(movie: Movie, index: number) {
        this.queryString = movie.title;

        this.selectedMovie.title = movie.title;
        this.selectedMovie._id = movie._id;
        this.selectedMovie.imdbId = movie.imdbId;
        this.selectedMovie.overview = movie.overview;
        this.selectedMovie.posterUrl = movie.posterUrl;
        this.selectedMovie.releaseDate = movie.releaseDate;

        this.selectedIndex = index;
        this.moviesLength = 0;
        this.movies = Observable.of<Movie[]>();
    }
}
