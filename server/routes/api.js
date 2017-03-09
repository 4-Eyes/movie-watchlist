const express = require('express');
const router = express.Router();
const DataRepository = require("./../repositories/data-repository");
const repo = new DataRepository();

router.get('/', (req, res) => {
    res.send('This is the api');
});

router.get('/movies', (req, res) => {
    repo.getMovies((err, movies) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(movies);
    });
});

router.get('/cinemas', (req, res) => {
    repo.getCinemas((err, cinemas) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(cinemas);
    });
});

router.post('/movies', (req, res) => {
    repo.createMovie(req.body, (err, response) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(response);
    });
});

router.post('/cinemas', (req, res) => {
    repo.createCinema(req.body, (err, response) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(response);
    });
});

router.get('/movie/:id', (req, res) => {
    repo.getMovie(req.params.id, (err, movie) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(movie);
    });
});

router.get('/cinema/:id', (req, res) => {
    repo.getCinema(req.params.id, (err, cinema) => {
        if (err) {
            res.send(err);
            return;
        }
        res.json(cinema);
    });
});

router.put('/movie/:id', (req, res) => {
    repo.updateMovie(req.params.id, req.body, (err, movie) => {
        if (err) {
            req.send(err);
            return;
        }
        res.json(movie);
    });
});

router.put('/cinema/:id', (req, res) => {
    repo.updateCinema(req.params.id, req.body, (err, cinema) => {
        if (err) {
            req.send(err);
            return;
        }
        res.json(cinema);
    });
});

router.delete('/movie/:id', (req, res) => {
    repo.deleteMovie(req.params.id, req.body, (err, movie) => {
        if (err) {
            req.send(err);
            return;
        }
        res.json(movie);
    })
});

router.delete('/cinema/:id', (req, res) => {
    repo.deleteCinema(req.params.id, req.body, (err, cinema) => {
        if (err) {
            req.send(err);
            return;
        }
        res.json(cinema);
    })
});

module.exports = router;
