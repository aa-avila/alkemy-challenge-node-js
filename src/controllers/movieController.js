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

const getAll = async (req, res, next) => {
    try {
        const response = await MovieSvc.getAll();

        res.send(response);
    } catch (error) {
        next(error);
    }
}

const getOne = async (req, res, next) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await MovieSvc.create(data);


        res.send(response);
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        next(error);
    }
}

const deleteAll = async (req, res, next) => {
    try {
        const response = {};


        res.send(response);
    } catch (error) {
        next(error);
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