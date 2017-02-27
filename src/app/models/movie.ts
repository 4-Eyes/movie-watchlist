import { Viewing } from "./viewing";

export class Movie {
    id: string;
    title: string;
    viewings: Viewing[];
    posterUrl: string;
    releaseYear: Date;
}
