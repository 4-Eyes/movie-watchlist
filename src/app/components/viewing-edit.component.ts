import { Component, Input, OnInit } from "@angular/core";
import { Viewing } from "../models/viewing";
import { Observable } from "rxjs";
import { Cinema } from "../models/cinema";
import { DataService } from "../services/data.service";

@Component(
    {
        moduleId: module.id,
        selector: 'viewing-edit',
        templateUrl: './../html/viewing-edit.component.html',
        styleUrls: ['./../css/viewing-edit.component.css']
    }
)
export class ViewingEditComponent implements OnInit {
    @Input() viewing: Viewing;
    cinemas: Observable<Cinema[]>;
    atCinema = false;

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.cinemas = this.dataService.getCinemas();
        if (this.viewing.cinema) {
            this.atCinema = true;
        }
    }

    selectCinema(cinema: Cinema) {
        this.viewing.cinema = cinema;
    }
}
