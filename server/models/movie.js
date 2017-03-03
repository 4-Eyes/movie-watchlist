const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        title: { type: String, required: true },
        imdbId: String,
        posterUrl: String,
        releaseDate: Date,
        overview: String,
        viewings: [
            {
                date: Date,
                cinema: {type: mongoose.Schema.Types.ObjectId, ref: 'Cinema'},
                rewatch: Boolean
            }
        ]
    }
);

module.exports = mongoose.model('Movie', movieSchema);
