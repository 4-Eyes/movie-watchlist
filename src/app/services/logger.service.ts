import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {

    log(message: string, errorClass?: any, errorMethod?: string) {
        if (errorClass) {
            console.log(`An error occurred in ${errorClass.instance.name}.`);
        }
        if (errorMethod) {
            console.log(`This happened in the method ${errorMethod}`);
        }
        console.log(message);
    }
}
