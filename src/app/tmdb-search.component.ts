import { OnInit, Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'

import { Movie } from "./models/movie";
import { TMDBService } from "./services/tmdb.service";

@Component(
    {
        moduleId: module.id,
        selector: "tmdb-search",
        templateUrl: './html/tmdb-search.component.html'
    }
)

export class TMDBSearchComponent implements OnInit {
    movies: Observable<Movie[]>;
    private searchTerms = new Subject<string>();
    selectedMovie: Movie;

    constructor(private tmdbService: TMDBService) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.movies = this.searchTerms
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(term => term ? this.tmdbService.search(term) : Observable.of<Movie[]>([]))
            .catch(error => {
                console.error(error);
                return Observable.of<Movie[]>([]);
            });
    }
}
