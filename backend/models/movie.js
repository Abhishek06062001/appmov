const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    movieName:String,
    Language:String,
    ReleaseDate:Date,
    Budget:Number,
    Collection:Number

})

const Movie = mongoose.model("Movie",movieSchema)

module.exports = Movie