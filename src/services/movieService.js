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
const Movie_Character = require('../models/movie_character');

const { Op } = require("sequelize");


const getAll = async (order) => {
    try {
        let response = {};

        // En caso de no proporcionar parametro ORDER
        if (!order) {
            response = await Movie.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'genre_id', 'rating'],
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
                    exclude: ['createdAt', 'updatedAt', 'genre_id', 'rating'],
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
                    exclude: ['createdAt', 'updatedAt', 'genre_id', 'rating'],
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
            attributes: {
                exclude: ['rating', 'genre_id', 'createdAt', 'updatedAt']
            },
            /*
            include: [{
                model: Character,
                as: 'characters',
                //through: { attributes: [] } //<-- prevent mapping object from being added

                attributes: {
                    exclude: ['age', 'weight', 'story', 'createdAt', 'updatedAt']
                }

            }]
            */
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
            include: [{
                model: Character,
                as: 'characters',
                attributes: {
                    exclude: ['age', 'weight', 'story', 'createdAt', 'updatedAt']
                }
            }]
        });

        // Devuelve error en caso de que no exista el id proporcionado
        if (response === null) {
            const error = new Error(`No se encuentra la pelicula o serie ${id}.`);
            error.status = 404;
            throw error;
        }

        // Tomamos el array de personajes para luego crear uno nuevo personalizado (sin "movie_character")
        const characters = response.characters;

        const charactersMap = characters.map((item) => {
            const newItem = {
                id: item.id,
                name: item.name,
                image: item.image
            }
            return newItem;
        });

        // Objeto 'movie" para enviar como respuesta
        const movie = {
            id: response.id,
            title: response.title,
            rating: response.rating,
            releaseDate: response.releaseDate,
            image: response.image,
            createdAt: response.createdAt,
            updatedAt: response.updatedAt,
            genre_id: response.genre_id,
            characters: charactersMap
        };

        return movie;
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

const update = async (id, data) => {
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
        const response = await Movie.findOne({
            where: {
                id: id
            },
            include: [{
                model: Character,
                as: 'characters',
                attributes: {
                    exclude: ['age', 'weight', 'story', 'createdAt', 'updatedAt']
                }
            }]
        });

        // Tomamos el array de personajes para luego crear uno nuevo personalizado (sin "movie_character")
        const characters = response.characters;

        const charactersMap = characters.map((item) => {
            const newItem = {
                id: item.id,
                name: item.name,
                image: item.image
            }
            return newItem;
        });

        // Objeto 'movie" para enviar como respuesta
        const movie = {
            id: response.id,
            title: response.title,
            rating: response.rating,
            releaseDate: response.releaseDate,
            image: response.image,
            createdAt: response.createdAt,
            updatedAt: response.updatedAt,
            genre_id: response.genre_id,
            characters: charactersMap
        };

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
        //Verficar si hay relaciones movie_character (al menos una)
        const relations = await Movie_Character.findOne();

        // Si hay relacionados, no se permite borrar y genera error
        if (relations) {
            const error = new Error('No se pueden eliminar todas las Peliculas o Series ya que existen personajes relacionados.');
            error.status = 409;
            throw error;
        }

        // Si no hay characters relacionadas, se procede a borrar todas las entradas
        const response = await Movie.destroy({
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

// CHARACTERS ASSOC

const addCharacter = async (movie_id, character_id) => {
    try {
        // Verificar si existe movie
        const movie = await Movie.findByPk(movie_id);

        // Si NO existe dicho movie, devuelve error
        if (movie == null) {
            const error = new Error(`No existe la Pelicula o Serie: ${movie_id}`);
            error.status = 409;
            throw error;
        }

        // Verificar si existe character
        const character = await Character.findByPk(character_id)

        // Si NO existe dicho character, devuelve error
        if (character == null) {
            const error = new Error(`No existe Personaje: ${character_id}`);
            error.status = 409;
            throw error;
        }

        // Si ambos existen, insertar el nuevo movie_character en la tabla
        const response = await Movie_Character.create({ movie_id, character_id });

        return response;
    } catch (error) {
        throw error;
    }
}

const deleteOneCharacter = async (movie_id, character_id) => {
    try {
        // Verificar si existe movie
        const movie = await Movie.findByPk(movie_id);

        // Si NO existe dicho movie, devuelve error
        if (movie == null) {
            const error = new Error(`No existe la Pelicula o Serie: ${movie_id}.`);
            error.status = 409;
            throw error;
        }

        // Verificar si existe character
        const character = await Character.findByPk(character_id)

        // Si NO existe dicho character, devuelve error
        if (character == null) {
            const error = new Error(`No existe Personaje: ${character_id}.`);
            error.status = 409;
            throw error;
        }

        // Verificar que existe relacion entre ambos
        const movieCharacter = await Movie_Character.findOne({
            where: {
                movie_id: movie_id,
                character_id: character_id
            }
        });

        // Si no existe relacion, devuelve error
        if (movieCharacter == null) {
            const error = new Error(`El personaje ${character_id} no se encuentra relacionado a la Pelicula o Serie ${movie_id}.`);
            error.status = 409;
            throw error;
        }

        // Si existe dicha entrada, eliminarla
        const response = await Movie_Character.destroy({ 
            where: {
                id: movieCharacter.id
            }
        });

        // Respuesta 1
        return response;
    } catch (error) {
        throw error;
    }
}

const deleteAllCharacters = async (movie_id) => {
    try {
        // Verificar si existe movie
        const movie = await Movie.findByPk(movie_id);

        // Si NO existe dicho movie, devuelve error
        if (movie == null) {
            const error = new Error(`No existe la Pelicula o Serie: ${movie_id}`);
            error.status = 409;
            throw error;
        }

        // Buscar characters relacionados con movie_id
        const characters = await Movie_Character.findAll({
            where: {
                movie_id: movie_id
            }
        });

        // Si no se encuentran personajes relacionados, error.
        if (characters.length === 0) {
            const error = new Error(`No existen personajes relacionados a la Pelicula o Serie: ${movie_id}`);
            error.status = 409;
            throw error;
        }

        // Si hay personajes relacionados, eliminar dichas relaciones
        const response = await Movie_Character.destroy({ 
            where: {
                movie_id: movie_id
            }
         });

         // Retorna cantidad de personajes asociados eliminados
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
    deleteAll,
    //
    addCharacter,
    deleteOneCharacter,
    deleteAllCharacters
}