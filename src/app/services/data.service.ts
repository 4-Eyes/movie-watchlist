
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { UtilityService } from "./utility.service";
@Injectable()
export class DataService {
    private apiUrl = "";

    constructor(private http: Http, private util: UtilityService) {

    }


}
