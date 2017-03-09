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

router.get('/movies', (req, res) => {
    repo.getMovies((err, movies) => handleResponse(err, movies, res));
});

router.get('/cinemas', (req, res) => {
    repo.getCinemas((err, cinemas) => handleResponse(err, cinemas, res));
});

router.post('/movies', (req, res) => {
    repo.createMovie(req.body, (err, movie) => handleResponse(err, movie, res));
});

router.post('/cinemas', (req, res) => {
    repo.createCinema(req.body, (err, cinema) => handleResponse(err, cinema, res));
});

router.get('/movie/:id', (req, res) => {
    repo.getMovie(req.params.id, (err, movie) => handleResponse(err, movie, res));
});

router.get('/cinema/:id', (req, res) => {
    repo.getCinema(req.params.id, (err, cinema) => handleResponse(err, cinema, res));
});

router.put('/movie/:id', (req, res) => {
    repo.updateMovie(req.params.id, req.body, (err, movie) => handleResponse(err, movie, res));
});

router.put('/cinema/:id', (req, res) => {
    repo.updateCinema(req.params.id, req.body, (err, cinema) => handleResponse(err, cinema, res));
});

router.delete('/movie/:id', (req, res) => {
    repo.deleteMovie(req.params.id, req.body, (err, movie) => handleResponse(err, movie, res));
});

router.delete('/cinema/:id', (req, res) => {
    repo.deleteCinema(req.params.id, req.body, (err, cinema) => handleResponse(err, cinema, res));
});

module.exports = router;
