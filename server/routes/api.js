const express = require('express');
const router = express.Router();
const DataRepository = require("./../repositories/data-repository");
const repo = new DataRepository();

router.get('/', (req, res) => {
    res.send('This is the api');
});

router.get('/movies', (req, res) => {
    repo.getMovies((err, movies) => {
        if (err) res.send(err);
        res.json(movies);
    });
});

router.get('/cinemas', (req, res) => {
    repo.getCinemas((err, cinemas) => {
        if (err) res.send(err);
        res.json(cinemas);
    });
});

router.post('/movies', (req, res) => {
    repo.createMovie(req.body, (err, response) => {
        if (err) res.send(err);
        res.json(response);
    });
});

router.post('/cinemas', (req, res) => {
    repo.createCinema(req.body, (err, response) => {
        if (err) res.send(err);
        res.json(response);
    });
});

router.get('/movie/:id', (req, res) => {
    repo.getMovie(req.params.id, (err, movie) => {
        if (err) console.error(err);
        res.json(movie);
    });
});

router.get('/cinema/:id', (req, res) => {
    repo.getCinema(req.params.id, (err, cinema) => {
        if (err) console.error(err);
        res.json(cinema);
    });
});

module.exports = router;