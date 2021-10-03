const getAll = require('./getAll');
const create = require('./create');
const deleteAll = require('./deleteAll');
const getOne = require('./getOne');
const update = require('./update');
const deleteOne = require('./deleteOne');
const addMovie = require('./addMovie');
const deleteAllMovies = require('./deleteAllMovies');
const deleteOneMovie = require('./deleteOneMovie');

module.exports = {
    '/characters': {
        ...getAll,
        ...create,
        ...deleteAll
    },
    '/characters/{id}':
    {
        ...getOne,
        ...update,
        ...deleteOne
    },
    '/characters/{character_id}/movies': {
        ...addMovie,
        ...deleteAllMovies
    },
    '/characters/{character_id}/movies/{movie_id}': {
        ...deleteOneMovie
    }
}