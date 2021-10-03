/** CHARACTER SERVICE */

const Character = require('../models/characterModel');
const Movie = require('../models/movieModel');
const Movie_Character = require('../models/movie_character');
const { Op } = require("sequelize");


const getAll = async () => {
    try {
        const response = await Character.findAll({
            attributes: {
                exclude: ['age', 'weight', 'story', 'createdAt', 'updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

const searchByName = async (name) => {
    try {
        // Buscamos todas las entradas que contengan "name" en la columna correspondiente
        const response = await Character.findAll({
            where: {
                name: {
                    [Op.substring]: name // permite que el nombre proporcionado no este completo, es decir, que sea una subcadena
                }
            },
            include: [{
                model: Movie,
                as: 'movies',
                attributes: {
                    exclude: ['genre_id', 'rating', 'createdAt', 'updatedAt']
                }
            }]
        });

        // Si no hay resultados, devuelve array vacio
        if (response.length === 0) {
            return response;
        }


        // Si encuentra coincidencias, modificamos los objetos  del array de movies para eliminar "movie_character"
        let characters = [];

        response.forEach(char => {
            const movies = char.movies;

            const moviesMap = movies.map((item) => {
                const newItem = {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    releaseDate: item.releaseDate
                }
                return newItem;
            });

            // Objeto 'character'
            const character = {
                id: char.id,
                name: char.name,
                age: char.age,
                weight: char.weight,
                story: char.story,
                image: char.image,
                createdAt: char.createdAt,
                updatedAt: char.updatedAt,
                movies: moviesMap
            };

            characters.push(character);
        });

        // Devuelve array de personajes
        return characters;
    } catch (error) {
        throw error;
    }
}

const filterByAge = async (age) => {
    try {
        const response = await Character.findAll({
            where: {
                age: age
            },
            attributes: {
                exclude: ['weight', 'story', 'createdAt', 'updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

const filterByWeight = async (weight) => {
    try {
        const response = await Character.findAll({
            where: {
                weight: weight
            },
            attributes: {
                exclude: ['age', 'story', 'createdAt', 'updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

const filterByMovie = async (movie_id) => {
    try {
        // Traemos todos los character_id que se correspondan con movie_id en movie_character
        const relatedCharacters_ids = await Movie_Character.findAll({
            where: {
                movie_id: movie_id
            },
            attributes: {
                exclude: ['id', 'movie_id'],
            }
        });

        // En caso de no existir asociaciones con movie_id, devuelve error
        if (relatedCharacters_ids.length === 0) {
            const error = new Error(`No existen personajes relacionados a la pelicula o serie: ${movie_id}.`);
            error.status = 404;
            throw error;
        }

        //En caso de existir asociaciones, traer los characters completos a partir de dicho array de ids
        let characters = [];

        if (relatedCharacters_ids.length > 0) {
            // Promise para manejo asíncrono del bucle forEach
            const getChars = new Promise((resolve, reject) => {
                relatedCharacters_ids.forEach(async (value, index, array) => {

                    const character = await Character.findOne({
                        where: {
                            id: value.character_id
                        },
                        attributes: {
                            exclude: ['age', 'weight', 'story', 'createdAt', 'updatedAt'],
                        }
                    });

                    characters.push(character.dataValues);

                    if (index === array.length - 1) resolve();
                });
            });

            // Ejecuta la promise y espera que se obtengan todos los datos
            await getChars.then(() => {
                console.log('ok!');
            });
        }

        // Retorna el array de personajes
        return characters;
    } catch (error) {
        throw error;
    }
}


const getOne = async (id) => {
    try {
        // Obtiene la entrada que coincida con el id dado
        const response = await Character.findOne({
            where: {
                id: id
            },
            include: [{
                model: Movie,
                as: 'movies',
                attributes: {
                    exclude: ['genre_id', 'rating', 'createdAt', 'updatedAt']
                }
            }]
        });

        // Devuelve error en caso de que no exista el id proporcionado
        if (response === null) {
            const error = new Error(`No se encuentra el personaje ${id}.`);
            error.status = 404;
            throw error;
        }

        // Tomamos el array de movies para luego crear uno nuevo personalizado (sin "movie_character")
        const movies = response.movies;

        const moviesMap = movies.map((item) => {
            const newItem = {
                id: item.id,
                title: item.title,
                image: item.image,
                releaseDate: item.releaseDate
            }
            return newItem;
        });

        // Objeto 'character' para enviar como respuesta
        const character = {
            id: response.id,
            name: response.name,
            age: response.age,
            weight: response.weight,
            story: response.story,
            image: response.image,
            createdAt: response.createdAt,
            updatedAt: response.updatedAt,
            movies: moviesMap
        };

        return character;
    } catch (error) {
        throw error;
    }
}

const create = async (data) => {
    try {
        const { name, age, weight, story, image } = data;

        // Verificar si existe otra entrada con el mismo nombre
        const character = await Character.findOne({
            where: {
                name: name
            }
        });

        // Si ya existe dicho nombre, devuelve error
        if (character != null) {
            const error = new Error(`Ya existe personaje con el nombre: ${name}`);
            error.status = 409;
            throw error;
        }

        // Si no existe previamente, insertar el nuevo character en la tabla
        const response = await Character.create({ name: name, age: age, weight: weight, story: story, image: image });

        return response;
    } catch (error) {
        throw error;
    }
}

const update = async (id, data) => {
    try {
        const { name, age, weight, story, image } = data;

        // Verificar si existe antes de hacer el update
        // si no existe, arroja error:
        const characterToUpdate = await Character.findByPk(id);

        if (!characterToUpdate) {
            const error = new Error(`El personaje ${id} no existe.`);
            error.status = 404;
            throw error;
        }

        // Si todo ok, actualiza BD
        await Character.update({ name: name, age: age, weight: weight, story: story, image: image }, {
            where: {
                id: id
            }
        });

        // Traemos la entrada actuallizada
        const response = await Character.findOne({
            where: {
                id: id
            },
            include: [{
                model: Movie,
                as: 'movies',
                attributes: {
                    exclude: ['genre_id', 'rating', 'createdAt', 'updatedAt']
                }
            }]
        });

        // Tomamos el array de movies para luego crear uno nuevo personalizado (sin "movie_character")
        const movies = response.movies;

        const moviesMap = movies.map((item) => {
            const newItem = {
                id: item.id,
                title: item.title,
                image: item.image,
                releaseDate: item.releaseDate
            }
            return newItem;
        });

        // Objeto 'character' para enviar como respuesta
        const character = {
            id: response.id,
            name: response.name,
            age: response.age,
            weight: response.weight,
            story: response.story,
            image: response.image,
            createdAt: response.createdAt,
            updatedAt: response.updatedAt,
            movies: moviesMap
        };

        return character;
    } catch (error) {
        throw error;
    }
}

const deleteOne = async (id) => {
    try {
        // Checkear si el registro que se quiere borrar existe. Si no, Error.
        const characterToDelete = await Character.findOne({
            where: {
                id: id
            },
            include: [Movie]
        });

        if (!characterToDelete) {
            const error = new Error(`No se encuentra Personaje: ${id}.`);
            error.status = 404;
            throw error;
        }

        // Verificar si existen movies relacionadas al character que se quiere borrar
        const relatedMovies = characterToDelete.movies;


        // Si hay relacionadas, no permite borrar y genera error
        if (relatedMovies.length != 0) {
            const error = new Error(`No se puede eliminar el personaje ${id} ya que existen Peliculas o Series asociadas.`);
            error.status = 409;
            throw error;
        }

        // Si no hay movies relacionadas, se procede a eliminar la entrada
        const response = await Character.destroy({
            where: {
                id: id
            }
        });

        // Respuesta 1
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
            const error = new Error('No se pueden eliminar todos los personajes ya que existen Peliculas o Series relacionadas.');
            error.status = 409;
            throw error;
        }

        // Si no hay movies relacionadas, se procede a borrar todas las entradas
        const response = await Character.destroy({
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

// MOVIES ASOCC

const addMovie = async (character_id, movie_id) => {
    try {
        // Verificar si existe character
        const character = await Character.findByPk(character_id);

        // Si NO existe dicho character, devuelve error
        if (character == null) {
            const error = new Error(`No existe el personaje: ${character_id}`);
            error.status = 404;
            throw error;
        }

        // Verificar si existe movie
        const movie = await Movie.findByPk(movie_id)

        // Si NO existe dicho movie, devuelve error
        if (movie == null) {
            const error = new Error(`No existe la Pelicula o Serie: ${movie_id}`);
            error.status = 404;
            throw error;
        }

        // Verificar si ya existe asociacion
        const asocc = await Movie_Character.findOne({
            where: {
                movie_id: movie_id,
                character_id: character_id
            }
        });

        // Si existe relacion, devuelve error
        if (asocc != null) {
            const error = new Error(`La película/serie ${movie_id} ya está asociada al personaje ${character_id}`);
            error.status = 409;
            throw error;
        }

        // Si no hay asocc y ambos existen, insertar el nuevo movie_character en la tabla
        const response = await Movie_Character.create({ movie_id, character_id });

        return response;
    } catch (error) {
        throw error;
    }
}

const deleteOneMovie = async (character_id, movie_id) => {
    try {
        // Verificar si existe character
        const character = await Character.findByPk(character_id);

        // Si NO existe dicho character, devuelve error
        if (character == null) {
            const error = new Error(`No existe el personaje: ${character_id}`);
            error.status = 404;
            throw error;
        }

        // Verificar si existe movie
        const movie = await Movie.findByPk(movie_id)

        // Si NO existe dicho movie, devuelve error
        if (movie == null) {
            const error = new Error(`No existe la Pelicula o Serie: ${movie_id}`);
            error.status = 404;
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
            const error = new Error(`La Pelicula o Serie ${movie_id} no se encuentra relacionada al personaje ${character_id}.`);
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

const deleteAllMovies = async (character_id) => {
    try {
        // Verificar si existe character
        const character = await Character.findByPk(character_id);

        // Si NO existe dicho character, devuelve error
        if (character == null) {
            const error = new Error(`No existe el personaje: ${character_id}`);
            error.status = 404;
            throw error;
        }

        // Buscar movies relacionados con character_id
        const movies = await Movie_Character.findAll({
            where: {
                character_id: character_id
            }
        });

        // Si no se encuentran movies relacionados, error.
        if (movies.length === 0) {
            const error = new Error(`No existen Peliculas o Series relacionadas al personaje: ${character_id}`);
            error.status = 409;
            throw error;
        }

        // Si hay movies relacionados, eliminar dichas relaciones
        const response = await Movie_Character.destroy({
            where: {
                character_id: character_id
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
    searchByName,
    filterByAge,
    filterByWeight,
    filterByMovie,
    getOne,
    create,
    update,
    deleteOne,
    deleteAll,
    //
    addMovie,
    deleteOneMovie,
    deleteAllMovies
}