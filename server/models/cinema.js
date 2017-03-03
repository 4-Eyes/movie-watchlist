const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: String,
        location: {
            latitude: Number,
            longitude: Number
        }
    }
);

module.exports = mongoose.model('Cinema', cinemaSchema);
