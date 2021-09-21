/** MOVIES */
//
// GET /movies => devuelve listado de movies (id, image, title, createdAt)
// .... busqueda por title y filtro por genre(idGenre)
// .... orden ASC | DESC (createdAt)
//
// GET /movies/:id => detalle de pelicula + characters asociados
//
// POST /movies => crea nueva pelicula o serie
//
// PUT /movies/:id => actualiza
//
// DELETE movies/:id => elimina
// .... (idea): no permite eliminar movie si hay personajes asociados a ésta


const Movie = require('../models/movieModel');

const getAll = async (queryOpt) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        throw error;
    }
}

const getOne = async (id) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        throw error;
    }
}

const create = async (data) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        throw error;
    }
}

const update = async (data) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        throw error;
    }
}

const deleteOne = async (id) => {
    try {
        const response = {};

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
    getOne,
    create,
    update,
    deleteOne,
    deleteAll
}