const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Movie extends Model { }

Movie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            // notEmpty: true
            notEmpty: {
                msg: 'No se proporcionó Título (title), o  sólo contiene espacios.'
            }
        }
    },
    rating: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },
    releaseDate: {
        type: DataTypes.DATEONLY, // formato de fecha => AAAA-MM-DD
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'movie' // => sequelize convierte a plural el modelo para sincronizar con tabla SQL
});


// Asociacion "One To Many"
// Sequelize genera una columna "genre_id" en "movies"

const Genre = require('./genreModel');


Genre.hasMany(Movie, {
    foreignKey: 'genre_id'
});

Movie.belongsTo(Genre, {
    foreignKey: 'genre_id'
});



module.exports = Movie;