import { Viewing } from "./viewing";

export class Movie {
    id: string;
    imdbId: string;
    title: string;
    viewings: Viewing[];
    posterUrl: string;
    releaseDate: Date;
    overview: string;
}
