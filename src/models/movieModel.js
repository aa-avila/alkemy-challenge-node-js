/** PELICULA O SERIE => movie (tabla: movies)
 * ID => id
 * Imagen (url) => image
 * Titulo => title
 * Calificacion => rating (1-5)
 * Personajes asociados => characters
 * Fecha de creacion => createdAt (autogenerado por sequelize)
 * (extra - autogenerado por sequelize):
 * Fecha de actualizacion => updatedAt
 * 
*/

/*********************************************************** */
/** Extendiendo Model (class) */

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
        validate: {
            notEmpty: true
        }
    },
    rating: {
        type: DataTypes.INTEGER,
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'movie' // => sequelize convierte a plural el modelo para sincronizar con tabla SQL
});

module.exports = Movie;