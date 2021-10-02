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
        unique: true,
        validate: {
            // notEmpty: true
            notEmpty: {
                msg: 'No se proporcionó nombre (name), o  sólo contiene espacios.'
            }
        }
    },
    age: {
        type: DataTypes.INTEGER,
    },
    weight: {
        type: DataTypes.INTEGER,
    },
    story: {
        type: DataTypes.TEXT,
    },
    image: {
        type: DataTypes.TEXT,
    }
}, {
    sequelize,
    modelName: 'character' // => sequelize convierte a plural el modelo para sincronizar con tabla SQL
});

module.exports = Character;