const express = require('express');
const router = express.Router();
const DataRepository = require("./../repositories/data-repository");
const repo = new DataRepository();

const handleResponse = (err, object, res) => {
    if (err) {
        res.send(err);
        return;
    }
    res.json(object);
};

router.get('/', (req, res) => {
    res.send('This is the api');
});

router.route('/movies')

    .get((req, res) => {
        repo.getMovies((err, movies) => handleResponse(err, movies, res));
    })

    .post((req, res) => {
        repo.createMovie(req.body, (err, movie) => handleResponse(err, movie, res));
    });

router.route('/cinemas')

    .get((req, res) => {
        repo.getCinemas((err, cinemas) => handleResponse(err, cinemas, res));
    })

    .post((req, res) => {
        repo.createCinema(req.body, (err, cinema) => handleResponse(err, cinema, res));
    });

router.route('/movie/:id')
    .get((req, res) => {
        repo.getMovie(req.params.id, (err, movie) => handleResponse(err, movie, res));
    })
    .put((req, res) => {
        repo.updateMovie(req.params.id, req.body, (err, movie) => handleResponse(err, movie, res));
    })
    .delete((req, res) => {
        repo.deleteMovie(req.params.id, req.body, (err, movie) => handleResponse(err, movie, res));
    });

router.route('/cinema/:id')
    .get((req, res) => {
        repo.getCinema(req.params.id, (err, cinema) => handleResponse(err, cinema, res));
    })
    .put((req, res) => {
        repo.updateCinema(req.params.id, req.body, (err, cinema) => handleResponse(err, cinema, res));
    })
    .delete((req, res) => {
        repo.deleteCinema(req.params.id, req.body, (err, cinema) => handleResponse(err, cinema, res));
    });

module.exports = router;
