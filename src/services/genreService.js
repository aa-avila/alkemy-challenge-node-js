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
const { Op } = require("sequelize");

const getAll = async () => {
    try {
        // Traer todos los registros, excluir campos createdAt y UpdatedAt
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
        // Trae el registro cuyo id coincida con el de la solicitud
        const response = await Genre.findOne({
            where: {
                id: id
            },
            include: [Movie],
            // attributes: {
            //     exclude: ['createdAt', 'updatedAt'],
            // }
        });

        // Arroja error en caso de que no se encuentre dicho id
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
        const name = data.name.toUpperCase();
        const image = data.image;

        // Verificar si existe otro nombre igual
        const genre = await Genre.findOne({
            where: {
                name: name
            }
        });

        // Si ya existe dicho genero, devuelve error
        if (genre != null) {
            const error = new Error(`El genero ${name} ya existe.`);
            error.status = 409;
            throw error;
        }

        // Si no existe previamente, insertar el nuevo genero en la tabla
        const response = await Genre.create({ name: name, image: image });

        return response;
    } catch (error) {
        throw error;
    }
}

const update = async (id, data) => {
    try {
        const name = data.name.toUpperCase();
        const image = data.image;

        // Verificar si existe el genero antes de hacer el update
        // si no existe, arroja error:
        const genreToUpdate = await Genre.findByPk(id);

        if (!genreToUpdate) {
            const error = new Error(`El genero ${id} no existe.`);
            error.status = 404;
            throw error;
        }

        // Actualiza BD
        await Genre.update({ name: name, image: image }, {
            where: {
                id: id
            }
        });

        // Traemos la entrada actuallizada y la enviamos como respuesta
        const genre = await Genre.findOne({
            where: {
                id: id
            },
            include: [Movie],
            // attributes: {
            //     exclude: ['createdAt', 'updatedAt'],
            // }
        });

        return (genre);

    } catch (error) {
        throw error;
    }
}

const deleteOne = async (id) => {
    try {
        // Verificar si existen movies relacionadas al genero que se quiere borrar
        const relatedMovies = await Movie.findAll({
            where: {
                genre_id: id
            }
        })

        // Si hay relacionadas, no permite borrar y genera error
        if (relatedMovies.length != 0) {
            const error = new Error(`No se puede eliminar el genero ${id} ya que existen peliculas o series asociados.`);
            error.status = 409;
            throw error;
        }

        // Si no hay movies relacionadas, se procede a eliminar la entrada
        const response = await Genre.destroy({
            where: {
                id: id
            }
        });

        // Si la query arroja "0" => dicho registro no existe. Error.
        if (response == 0) {
            const error = new Error(`No se encuentra el genero ${id}.`);
            error.status = 404;
            throw error;
        }

        // Respuesta afirmativa 1
        return response;

    } catch (error) {
        throw error;
    }
}

const deleteAll = async () => {
    try {
        // TODO: reemplazar por findOne (traer la primera movie que tenga un genre_id notNull)
        // de esta manera cumple con la condicion de que al menos haya 1 movie relacionada
        // y evitamos traer toooooodas las peliculas con dicho genero
        // Verificar si existen movies relacionadas
        const relatedMovies = await Movie.findAll({
            where: {
                genre_id: {
                    [Op.not]: null
                }
            }
        })

        // Si hay relacionadas, no se permite borrar y genera error
        if (relatedMovies.length != 0) {
            const error = new Error('No se pueden eliminar los generos ya que existen peliculas o series asociados.');
            error.status = 409;
            throw error;
        }

        // Si no hay movies relacionadas, se procede a borrar todas las entradas
        const response = await Genre.destroy({
            where: {
                id: {
                    [Op.gt]: 0
                }
            }
        });

        // Retorna la cantidad de filas eliminadas
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