/** MOVIES */
//
// GET /movies => devuelve listado de movies (id, image, title, createdAt)
// .... busqueda por title y filtro por genre(genre_id)
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
        const { title, genre_id, order } = req.query;
        let response = {};

        if (!title && !genre_id) {
            response = await MovieSvc.getAll(order);
        }

        if (genre_id) {
            response = await MovieSvc.filterByGenre(genre_id, order);
        }

        if (title) {
            response = await MovieSvc.searchByTitle(title);
        }


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