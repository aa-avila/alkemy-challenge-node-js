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

const getAll = async (queryOpt) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        return error.message;
    }
}

const getOne = async (id) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        return error.message;
    }
}

const create = async (data) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        return error.message;
    }
}

const update = async (data) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        return error.message;
    }
}

const deleteOne = async (id) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        return error.message;
    }
}

const deleteAll = async () => {
    try {
        const response = {};

        return response;
    } catch (error) {
        return error.message;
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