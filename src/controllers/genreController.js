/** GENRES */
//
// GET /genres => devuelve listado de genres (id, image, name)
//
// GET /genres/:id => detalle de pelicula + characters asociados
//
// POST /genres => crea nueva genero
//
// PUT /genres/:id => actualiza genero
// .... (idea): no permite actualizar el nombre en caso de haber peliculas o personajes asociados al genero que se quiere eliminar
//
// DELETE /genres/:id => elimina genero
// .... (idea): no permite eliminar genero si hay peliculas o personajes asociados al mismo


const GenreSvc = require('../services/genreService');

const getAll = async (req, res, next) => {
    try {
        const response = {};

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

        const response = await GenreSvc.create(data);

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