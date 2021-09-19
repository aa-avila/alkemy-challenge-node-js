/** GENERO => genre (tabla: genres)
 * ID => id
 * Imagen (url) => image
 * Nombre => name
 * Peliculas o series asociadas => movies
 * (extra -  autogenerados por sequelize):
 * Fecha de creacion => createdAt
 * Fecha de actualizacion => updatedAt
*/

/*********************************************************** */
/** Extendiendo Model (class) */

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Genre extends Model { }

Genre.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    movies: {
        type: DataTypes.STRING, // array to string sep por ','
    }
}, {
    sequelize,
    modelName: 'genre' // => sequelize convierte a plural el modelo para sincronizar con tabla SQL
});

module.exports = Genre;


/*********************************************************** */
/** Ejemplo usando sequelize.define: */

/**
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Genre = sequelize.define('user', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    movies: {
        type: DataTypes.INTEGER,
    }
}, {
    // Other model options go here
});

module.exports = Genre;
 */

