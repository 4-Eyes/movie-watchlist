const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/watchlistApp');

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
    };

    createMovie(data, callback) {
        Movie.create(data, callback);
    };

    createCinema(data, callback) {
        Cinema.create(data, callback);
    };

    getMovie(id, callback) {
        Movie.findById(id)
            .populate("viewings.cinema")
            .exec(callback);
    };

    getCinema(id, callback) {
        Cinema.findById(id, callback);
    }

    updateMovie(id, data, callback) {
        Movie.findByIdAndUpdate(id, data, callback);
    }

    updateCinema(id, data, callback) {
        Cinema.findByIdAndUpdate(id, data, callback);
    }

    deleteMovie(id, data, callback) {
        Movie.findByIdAndRemove(id, data, callback);
    };

    deleteCinema(id, data, callback) {
        Cinema.findByIdAndRemove(id, data, callback);
    }
}

module.exports = DataRepository;
