import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Movie } from "../models/movie";

import 'rxjs/add/operator/map';
import { UtilityService } from "./utility.service";

@Injectable()
export class TMDBService {
    private apiUrl = "https://api.themoviedb.org/3/";
    private apiKey = "";

    constructor(private http: Http, private util: UtilityService) {
        //this.apiKey = require("json!./../../../config.json").tmdbApiKey
    }

    search(query: string): Observable<Movie[]> {
        let url = this.apiUrl + "search/movie";
        let queryParams: URLSearchParams = new URLSearchParams();
        queryParams.set("api_key", this.apiKey);
        queryParams.set("query", query);

        return this.http
            .get(url, {search: queryParams})
            .map((response: any) => {
                let data = response.json();
                let results: Movie[] = [];
                let i = 0;
                for (let result of data.results) {
                    results.push(this.util.tmdbResultToMovie(result));
                }
                return results;
            });
    }
}
