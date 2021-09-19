/** PERSONAJE => character (tabla: characters)
 * ID => id
 * Imagen (url) => image
 * Nombre => name
 * Edad => age
 * Peso => weight
 * Historia => story
 * Peliculas o series asociadas => movies
 * (extra -  autogenerados por sequelize):
 * Fecha de creacion => createdAt
 * Fecha de actualizacion => updatedAt
*/

/*********************************************************** */
/** Extendiendo Model (class) */

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Character extends Model { }

Character.init({
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
    age: {
        type: DataTypes.INTEGER,
    },
    weight: {
        type: DataTypes.INTEGER,
    },
    story: {
        type: DataTypes.STRING,
    },
    movies: {
        type: DataTypes.STRING, // array to string sep por ','
    }
}, {
    sequelize,
    modelName: 'character' // => sequelize convierte a plural el modelo para sincronizar con tabla SQL
});

module.exports = Character;