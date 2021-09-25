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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            // notEmpty: true
            notEmpty: {
                msg: 'No se proporcionó nombre (name), o  sólo contiene espacios.'
            }
        }
    },
    image: {
        type: DataTypes.STRING
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
    }
}, {
    // Other model options go here
});

module.exports = Genre;
 */

