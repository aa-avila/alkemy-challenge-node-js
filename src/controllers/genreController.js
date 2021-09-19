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