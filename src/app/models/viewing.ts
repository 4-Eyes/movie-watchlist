import { Cinema } from "./cinema";

export class Viewing {
    id: number;
    _date: Date = new Date(Date.now());
    get date(): string {
        return this._date.toLocaleDateString("en-UK");
    }
    set date(newDate: string) {
        this._date = new Date(newDate);
    }

    cinema: Cinema = null;
    rewatch: boolean;
}
