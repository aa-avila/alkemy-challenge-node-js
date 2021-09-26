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
const { Op } = require("sequelize");


const getAll = async (order) => {
    try {
        let response = {};

        // En caso de no proporcionar parametro ORDER
        if (!order) {
            response = await Movie.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'genre_id'],
                }
            });
        }

        // Si se proporciona parametro ORDER
        if (order) {
            // Verificar parametro ORDER
            // si no es asc o desc => throw err
            const order_uc = order.toUpperCase();

            if (order_uc != 'ASC' && order_uc != 'DESC') {
                const error = new Error('El parametro ORDER solo admite los valores ASC y DESC.');
                error.status = 400;
                throw error;
            }

            // Si la query es correcta, envia respuesta con las movies en el orden especificado 
            response = await Movie.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'genre_id'],
                },
                order: [
                    ['releaseDate', order]
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

        // En caso de no proporcionar parametro ORDER
        if (!order) {
            response = await Movie.findAll({
                where: {
                    genre_id: genre_id
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'genre_id'],
                }
            });
        }

        // Si se proporciona parametro ORDER
        if (order) {
            // Verificar parametro ORDER
            // si no es asc o desc => throw err
            const order_uc = order.toUpperCase();

            if (order_uc != 'ASC' && order_uc != 'DESC') {
                const error = new Error('El parametro ORDER solo admite los valores ASC y DESC.');
                error.status = 400;
                throw error;
            }

            // Si la query es correcta, envia respuesta con las movies en el orden especificado 
            response = await Movie.findAll({
                where: {
                    genre_id: genre_id
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'genre_id'],
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
        // Buscamos todas las entradas que contengan "title" en la columna correspondiente
        const response = await Movie.findAll({
            where: {
                title: {
                    [Op.substring]: title // permite que el titulo proporcionado no este completo, es decir, que sea una subcadena
                }
            },
            include: [Character],
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
        // Obtiene la entrada que coincida con el id dado
        const response = await Movie.findOne({
            where: {
                id: id
            },
            include: [Character]
        });

        // Devuelve error en caso de que no exista el id proporcionado
        if (response === null) {
            const error = new Error(`No se encuentra la pelicula o serie ${id}.`);
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
        const { title, rating, releaseDate, image, genre_id } = data;

        // Verificar si existe otra entrada con el mismo titulo
        const movie = await Movie.findOne({
            where: {
                title: title
            }
        });

        // Si ya existe dicho titulo, devuelve error
        if (movie != null) {
            const error = new Error(`Ya existe Pelicula o Serie con el titulo: ${title}`);
            error.status = 409;
            throw error;
        }

        // Si no existe previamente, insertar el nuevo movie en la tabla
        const response = await Movie.create({ title: title, rating: rating, releaseDate: releaseDate, image: image, genre_id });

        return response;
    } catch (error) {
        throw error;
    }
}

const update = async (data) => {
    try {
        const { title, rating, releaseDate, image, genre_id } = data;


        // Verificar si existe antes de hacer el update
        // si no existe, arroja error:
        const movieToUpdate = await Movie.findByPk(id);

        if (!movieToUpdate) {
            const error = new Error(`La Pellicula o Serie ${id} no existe.`);
            error.status = 404;
            throw error;
        }

        // Actualiza BD
        await Movie.update({ title: title, rating: rating, releaseDate: releaseDate, image: image, genre_id: genre_id }, {
            where: {
                id: id
            }
        });

        // Traemos la entrada actuallizada y la enviamos como respuesta
        const movie = await Movie.findOne({
            where: {
                id: id
            },
            include: [Character],
            // attributes: {
            //     exclude: ['createdAt', 'updatedAt'],
            // }
        });

        return (movie);

    } catch (error) {
        throw error;
    }
}

const deleteOne = async (id) => {
    try {
        // Checkear si el registro que se quiere borrar existe. Si no, Error.
        const movieToDelete = await Movie.findOne({
            where: {
                id: id
            },
            include: [Character]
        });

        if (!movieToDelete) {
            const error = new Error(`No se encuentra la Pelicula o Serie: ${id}.`);
            error.status = 404;
            throw error;
        }

        // Verificar si existen characters relacionadas al movie que se quiere borrar
        const relatedCharacters = movieToDelete.characters;

        // console.log(relatedCharacters);

        // Si hay relacionadas, no permite borrar y genera error
        if (relatedCharacters.length != 0) {
            const error = new Error(`No se puede eliminar la Pelicula o Serie ${id} ya que existen personajes asociados.`);
            error.status = 409;
            throw error;
        }

        // Si no hay characters relacionadas, se procede a eliminar la entrada
        const response = await Movie.destroy({
            where: {
                id: id
            }
        });

        // Respuesta afirmativa 1
        return response;
    } catch (error) {
        throw error;
    }
}

const deleteAll = async () => {
    try {
        // Verificar si existe al menos 1 movie con characters relacionados (evitar traer todo)

        // Si hay relacionados, no se permite borrar y genera error
        // if (relatedCharacters.length != 0) {
        //     const error = new Error(`No se puede eliminar la Pelicula o Serie ${id} ya que existen personajes asociados.`);
        //     error.status = 409;
        //     throw error;
        // }

        // Si no hay characters relacionados, se procede a borrar todas las entradas
        // const response = await Movie.destroy({
        //     where: {
        //         id: {
        //             [Op.gt]: 0
        //         }
        //     }
        // });


        const response = {};

        // Retorna la cantidad de filas eliminadas
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