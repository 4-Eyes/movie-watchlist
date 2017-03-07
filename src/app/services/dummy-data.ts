import { Movie } from "../models/movie";
import { Cinema } from "../models/cinema";

export const MOVIES: Movie[] = [
    {
        _id: 157336,
        imdbId: "tt0816692",
        posterUrl: "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
        title: "Interstellar",
        releaseDate: new Date("2014-11-05"),
        overview: "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        viewings: [
            {
                _date: new Date("2014-11-21"),
                cinema: {
                    _id: 0,
                    name: "Reading Cinemas, The Palms",
                    location: {
                        latitude: -43.5073936,
                        longitude: 172.6618957
                    }
                },
                id: 0,
                rewatch: false,
                date: "2014-11-21"
            }
        ]
    }
];
export const CINEMAS: Cinema[] = [
    {
        _id: 0,
        name: "Reading Cinemas, The Palms",
        location: {
            latitude: -43.5073936,
            longitude: 172.6618957
        }
    },
    {
        _id: 1,
        name: "Hoyts Riccarton",
        location: {
            latitude: -43.5316394,
            longitude: 172.5979278
        }
    },
    {
        _id: 2,
        name: "Academy Gold",
        location: {
            latitude: -43.5463849,
            longitude: 172.6338126
        }
    },
];
