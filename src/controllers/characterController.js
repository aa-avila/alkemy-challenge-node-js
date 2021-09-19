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


const CharacterSvc = require('../services/characterService');

const getAll = async (req, res) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        res.status(500).send({ 'Error': error.message });
        console.log(error.message);
    }
}

const getOne = async (req, res) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        res.status(500).send({ 'Error': error.message });
        console.log(error.message);
    }
}

const create = async (req, res) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        res.status(500).send({ 'Error': error.message });
        console.log(error.message);
    }
}

const update = async (req, res) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        res.status(500).send({ 'Error': error.message });
        console.log(error.message);
    }
}

const deleteOne = async (req, res) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        res.status(500).send({ 'Error': error.message });
        console.log(error.message);
    }
}

const deleteAll = async (req, res) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        res.status(500).send({ 'Error': error.message });
        console.log(error.message);
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