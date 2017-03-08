import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {

    log(message: string): void {
        console.log(message);
    }

    error(message: string, errorClass?: any, errorMethod?: string): void {
        if (errorClass) {
            console.error(`An error occurred in ${errorClass.instance.name}.`);
        }
        if (errorMethod) {
            console.error(`This happened in the method ${errorMethod}`);
        }
        console.error(message);
    }
}
