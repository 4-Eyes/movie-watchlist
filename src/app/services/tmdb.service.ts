import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Movie } from "../models/movie";

import 'rxjs/add/operator/map';
import { UtilityService } from "./utility.service";
import { TMDBConfig } from "../models/tmdb-config";
import { LoggerService } from "./logger.service";

@Injectable()
export class TMDBService {
    private apiUrl = "https://api.themoviedb.org/3/";
    private defaultQueryParams: URLSearchParams = new URLSearchParams();
    public tmdbConfig: TMDBConfig;

    constructor(private http: Http,
                private util: UtilityService,
                private loggerService: LoggerService) {
        this.util.loadJson("./config.json")
            .subscribe(configData => {
                this.defaultQueryParams.set("api_key", configData.tmdbApiKey);
                this.defaultQueryParams.set("language", "en-UK");
                this.getConfig()
            }, err => console.error(err));
    }

    search(query: string): Observable<Movie[]> {
        let url = this.apiUrl + "search/movie";
        let queryParams: URLSearchParams = this.defaultQueryParams.clone();
        queryParams.set("query", query);

        return this.http
            .get(url, { search: queryParams })
            .map((response: any) => {
                let data = response.json();
                let results: Movie[] = [];
                for (let result of data.results) {
                    results.push(this.util.tmdbResultToMovie(result));
                }
                return results;
            });
    }

    private getConfig() {
        return this.http
            .get(this.apiUrl + "configuration", { search: this.defaultQueryParams })
            .map((response: any) => this.util.tmdbConfigParser(response.json()))
            .subscribe(configData => this.tmdbConfig = configData);
    }

    getMovie(id: number): Observable<Movie> {
        let url = this.apiUrl + "movie/" + id;
        let queryParams = this.defaultQueryParams.clone();

        return this.http
            .get(url, { search: queryParams })
            .map(response => this.util.tmdbResultToMovie(response.json()))
    }

    generatePosterUrl(movie: Movie, posterSize: number): string {
        if (!this.tmdbConfig) return;
        if (Math.abs(posterSize) >= this.tmdbConfig.posterSizes.length) {
            this.loggerService.log("Tried to get a poster size outside of available sizes")
        }
        return this.tmdbConfig.imageBaseUrl +
            this.tmdbConfig.posterSizes[(posterSize >= 0 ? posterSize : (this.tmdbConfig.posterSizes.length + posterSize))] +
            movie.posterUrl;
    }
}
