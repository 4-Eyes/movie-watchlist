const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        location: {
            latitude: Number,
            longitude: Number
        }
    }
);

module.exports = mongoose.model('Cinema', cinemaSchema);
