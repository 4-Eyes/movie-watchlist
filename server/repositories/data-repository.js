const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/watchlistApp');

const Schema = mongoose.Schema;
const Cinema = require("./../models/cinema");
const Movie = require("./../models/movie");

class DataRepository {

    getMovies(callback) {
        Movie.find({})
            .populate('viewings.cinema')
            .exec(callback);
    };

    getCinemas(callback) {
        Cinema.find({}, callback);
    }

    createMovie(data, callback) {
        Movie.create(data, callback);
    }

    createCinema(data, callback) {
        Cinema.create(data, callback);
    }
}

module.exports = DataRepository;
