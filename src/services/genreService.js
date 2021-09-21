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


const Genre = require('../models/genreModel');

const getAll = async () => {
    try {
        const response = await Genre.findAll();

        let genres = [];

        response.forEach(element => {
            const obj = {
                id: element.id,
                image: element.image,
                name: element.name
            };
            genres.push(obj);
        });

        return genres;
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
        const { name, image, movies } = data;

        if (name == null || name == '') {
            const error = new Error('Faltan datos. Nombre (name) es requerido.');
            error.status = 400;
            throw error;
        }

        if (name == 3) {
            const error = new Error('El nombre no puede ser un numero 3');
            error.status = 400;
            throw error;
        }

        const response = await Genre.create({ name: name, image: image, movies: movies });

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