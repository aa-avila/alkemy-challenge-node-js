/** MOVIES */
//
// GET /movies => devuelve listado de movies (id, image, title, createdAt)
// .... busqueda por title y filtro por genre(idGenre)
// .... orden ASC | DESC (releaseDate)
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
const Character = require('../models/characterModel');


const getAll = async (order) => {
    try {
        let response = {};

        if (!order) {
            response = await Movie.findAll({
                attributes: {
                    exclude: ['updatedAt'],
                }
            });
        } else {
            // TODO: verificar parametro ORDER
            // si no es asc o desc => throw err
            // (toUpperCase y luego verif)

            response = await Movie.findAll({
                attributes: {
                    exclude: ['updatedAt'],
                },
                order: [
                    ['createdAt', order]
                ]
            });
        }

        return response;
    } catch (error) {
        throw error;
    }
}

const filterByGenre = async (genre_id, order) => {
    try {
        let response = {};

        if (!order) {
            response = await Movie.findAll({
                where: {
                    genre_id: genre_id
                },
                attributes: {
                    exclude: ['updatedAt'],
                }
            });
        } else {
            // TODO: verificar parametro ORDER
            // si no es asc o desc => throw err
            // (toUpperCase y luego verif)

            response = await Movie.findAll({
                where: {
                    genre_id: genre_id
                },
                attributes: {
                    exclude: ['updatedAt'],
                },
                order: [
                    ['createdAt', order]
                ]
            });
        }
        return response;
    } catch (error) {
        throw error;
    }
}

const searchByTitle = async (title) => {
    try {

        const response = await Movie.findAll({
            where: {
                title: title
            },
            include: [Character],
            attributes: {
                exclude: ['updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}


const getOne = async (id) => {
    try {
        const response = await Movie.findOne({
            where: {
                id: id
            },
            include: [Character]
        });

        if (response === null) {
            const error = new Error(`No se encuentra la pelicula o serie ${id}.` );
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
        const { title, image, rating, genre_id } = data;

        const response = await Movie.create({ title: title, image: image, rating: rating, genre_id });

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
    filterByGenre,
    searchByTitle,
    getOne,
    create,
    update,
    deleteOne,
    deleteAll
}