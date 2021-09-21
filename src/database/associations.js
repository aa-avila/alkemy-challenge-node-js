const Genre = require('../models/genreModel');
const Movie = require('../models/movieModel');
const Character = require('../models/characterModel');


const dbAssoc = () => {

    // Asociacion "One To Many"
    Genre.hasMany(Movie, {
        foreignKey: 'genre_id'
    });

    Movie.belongsTo(Genre, {
        foreignKey: 'genre_id'
    });


    // Asociacion "Many To Many"
    Movie.belongsToMany(Character, {
        through: "movie_character",
        as: "characters",
        foreignKey: "movie_id",
    });

    Character.belongsToMany(Movie, {
        through: "movie_character",
        as: "movies",
        foreignKey: "character_id",
    });




    //Metodo simple por default:
    //
    // Genre.hasMany(Movie);
    // Movie.belongsTo(Genre);
    //
    // Movie.belongsToMany(Character, { through: 'movie_character' });
    // Character.belongsToMany(Movie, { through: 'movie_character' });
}

module.exports = dbAssoc;
