const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

const Movie = require('./movieModel');
const Character = require('./characterModel');
/*
const Movie_Character = sequelize.define('movie_character', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
}, { timestamps: false }
);

Movie.belongsToMany(Character, { through: Movie_Character });
Character.belongsToMany(Movie, { through: Movie_Character });
*/



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
        unique: false,
        references: {
            model: Movie,
            key: 'id'
        }
    },
    character_id: {
        type: DataTypes.INTEGER,
        unique: false,
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




module.exports = Movie_Character;