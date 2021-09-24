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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
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
    image: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'character' // => sequelize convierte a plural el modelo para sincronizar con tabla SQL
});

module.exports = Character;