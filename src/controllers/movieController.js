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


const MovieSvc = require('../services/movieService');

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