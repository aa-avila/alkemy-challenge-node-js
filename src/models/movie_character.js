const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

const Movie = require('./movieModel');
const Character = require('./characterModel');


class Movie_Character extends Model { }

Movie_Character.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            key: 'id'
        }
    },
    character_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Character,
            key: 'id'
        }
    }
},
    {
        sequelize,
        modelName: 'movie_character',
        timestamps: false
    });


// Asociacion "Many To Many"
Movie.belongsToMany(Character, {
    through: "movie_character",
    // as: "characters",
    foreignKey: "movie_id",
});

Character.belongsToMany(Movie, {
    through: "movie_character",
    // as: "movies",
    foreignKey: "character_id",
});