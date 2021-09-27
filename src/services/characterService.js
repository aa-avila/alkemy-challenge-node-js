/** CHARACTERS */
//
// GET /characters => devuelve listado de personajes (id, image, name)
// .... busqueda por name y filtro por age, weight, movies(by idMovie)
//
// GET /characters/:id => detalle del personaje + movies relacionadas
//
// POST /characters => crea nuevo personaje
//
// PUT /characters/:id => actualiza personaje
//
// DELETE /character/:id => elimina personaje
// .... (idea): no permite eliminar character si hay movies asociados a ésta


const Character = require('../models/characterModel');
const Movie = require('../models/movieModel');
const Movie_Character = require('../models/movie_character');

const { Op } = require("sequelize");



const getAll = async () => {
    try {
        const response = await Character.findAll({
            attributes: {
                exclude: ['age', 'weight', 'story', 'createdAt', 'updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

const searchByName = async (name) => {
    try {
        // Buscamos todas las entradas que contengan "name" en la columna correspondiente
        const response = await Character.findAll({
            where: {
                name: {
                    [Op.substring]: name // permite que el nombre proporcionado no este completo, es decir, que sea una subcadena
                }
            },
            include: [Movie],
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

const filterByAge = async (age) => {
    try {
        const response = await Character.findAll({
            where: {
                age: age
            },
            attributes: {
                exclude: ['weight', 'story', 'createdAt', 'updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

const filterByWeight = async (weight) => {
    try {
        const response = await Character.findAll({
            where: {
                weight: weight
            },
            attributes: {
                exclude: ['age', 'story', 'createdAt', 'updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

const filterByMovie = async (movie_id) => {
    try {
        const response = [];

        return response;
    } catch (error) {
        throw error;
    }
}


const getOne = async (id) => {
    try {
        // Obtiene la entrada que coincida con el id dado
        const response = await Character.findOne({
            where: {
                id: id
            },
            include: [Movie]
        });

        // Devuelve error en caso de que no exista el id proporcionado
        if (response === null) {
            const error = new Error(`No se encuentra el personaje ${id}.`);
            error.status = 404;
            throw error;
        }

        return response;
    } catch (error) {
        throw error;
    }
}

const create = async (data) => {
    try {
        const { name, age, weight, story, image } = data;

        // Verificar si existe otra entrada con el mismo nombre
        const character = await Character.findOne({
            where: {
                name: name
            }
        });

        // Si ya existe dicho nombre, devuelve error
        if (character != null) {
            const error = new Error(`Ya existe personaje con el nombre: ${name}`);
            error.status = 409;
            throw error;
        }

        // Si no existe previamente, insertar el nuevo character en la tabla
        const response = await Character.create({ name: name, age: age, weight: weight, story: story, image: image });

        return response;
    } catch (error) {
        throw error;
    }
}

const update = async (id, data) => {
    try {
        const { name, age, weight, story, image } = data;

        // Verificar si existe antes de hacer el update
        // si no existe, arroja error:
        const characterToUpdate = await Character.findByPk(id);

        if (!characterToUpdate) {
            const error = new Error(`El personaje ${id} no existe.`);
            error.status = 404;
            throw error;
        }

        // Actualiza BD
        await Character.update({ name: name, age: age, weight: weight, story: story, image: image }, {
            where: {
                id: id
            }
        });

        // Traemos la entrada actuallizada y la enviamos como respuesta
        const character = await Character.findOne({
            where: {
                id: id
            },
            include: [Movie],
            // attributes: {
            //     exclude: ['createdAt', 'updatedAt'],
            // }
        });

        return (character);
    } catch (error) {
        throw error;
    }
}

const deleteOne = async (id) => {
    try {
        // Checkear si el registro que se quiere borrar existe. Si no, Error.
        const characterToDelete = await Character.findOne({
            where: {
                id: id
            },
            include: [Movie]
        });

        if (!characterToDelete) {
            const error = new Error(`No se encuentra Personaje: ${id}.`);
            error.status = 404;
            throw error;
        }

        // Verificar si existen movies relacionadas al character que se quiere borrar
        const relatedMovies = characterToDelete.movies;


        // Si hay relacionadas, no permite borrar y genera error
        if (relatedMovies.length != 0) {
            const error = new Error(`No se puede eliminar el personaje ${id} ya que existen Peliculas o Series asociadas.`);
            error.status = 409;
            throw error;
        }

        // Si no hay movies relacionadas, se procede a eliminar la entrada
        const response = await Character.destroy({
            where: {
                id: id
            }
        });

        // Respuesta afirmativa 1
        return response;
    } catch (error) {
        throw error;
    }
}

const deleteAll = async () => {
    try {
        const response = {};

        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAll,
    searchByName,
    filterByAge,
    filterByWeight,
    filterByMovie,
    getOne,
    create,
    update,
    deleteOne,
    deleteAll
}