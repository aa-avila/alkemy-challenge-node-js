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
const Movie = require('../models/movieModel');


const getAll = async () => {
    try {
        const response = await Genre.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

const getOne = async (id) => {
    try {
        const response = await Genre.findOne({
            where: {
                id: id
            },
            include: [Movie],
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }
        });

        if (response === null) {
            const error = new Error(`No se encuentra el genero ${id}.`);
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
        const { name, image, movies } = data;

        const response = await Genre.create({ name: name, image: image, movies: movies });

        return response;
    } catch (error) {
        throw error;
    }
}

const update = async (id, data) => {
    try {
        const { name, image } = data;

        // TODO: verificar si existe el genero antes de hace la query
        // si no existe, arroja error:
        //const error = new Error(`El genero ${id} no existe.` );
        //error.status = 404;
        //throw error;

        const response = await Genre.update({ name: name, image: image }, {
            where: {
                id: id
            }
        });

        // console.log(response);

        // if (response == 0) {
        //     return ({'Message': 'No se modificaron datos.'})
        // }


        const genre = await Genre.findOne({
            where: {
                id: id
            },
            include: [Movie],
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }
        });

        return (genre);
    } catch (error) {
        throw error;
    }
}

const deleteOne = async (id) => {
    try {
        const response = await Genre.destroy({
            where: {
                id: id
            }
        });

        if (response == 0) {
            const error = new Error(`No se encuentra el genero ${id}.`);
            error.status = 404;
            throw error;
        }

        if (response == 1) {
            return ('OK');
        }
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