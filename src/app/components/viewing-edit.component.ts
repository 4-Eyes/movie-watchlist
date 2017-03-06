import { Component, Input, OnInit } from "@angular/core";
import { Viewing } from "../models/viewing";
import { Observable } from "rxjs";
import { Cinema } from "../models/cinema";
import { DataService } from "../services/data.service";

@Component(
    {
        moduleId: module.id,
        selector: 'viewing-edit',
        templateUrl: './../html/viewing-edit.component.html'
    }
)
export class ViewingEditComponent implements OnInit {
    @Input() viewing: Viewing;
    @Input() viewingNo: number;
    cinemas: Observable<Cinema[]>;
    atCinema = false;

    constructor(private dataService: DataService) {
        // this.cinemas = dataService.getCinemas();
        this.cinemas = Observable.of<Cinema[]>(
            [
                {
                    _id: 0,
                    name: "Readings The Palms",
                    location: {
                        latitude: 0,
                        longitude: 0,
                    }
                }
            ]
        )
    }

    ngOnInit(): void {
        if (this.viewing.cinema) {
            this.atCinema = true;
        }
    }

    selectCinema(cinema: Cinema) {
        this.viewing.cinema = cinema;
    }
}
