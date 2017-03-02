import { Viewing } from "./viewing";

export class Movie {
    id: number;
    imdbId: string;
    title: string;
    viewings: Viewing[];
    posterUrl: string;
    releaseDate: Date;
    overview: string;
}
