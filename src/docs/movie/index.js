const getAll = require('./getAll');
const create = require('./create');
const deleteAll = require('./deleteAll');
const getOne = require('./getOne');
const update = require('./update');
const deleteOne = require('./deleteOne');
const addCharacter = require('./addCharacter');
const deleteAllCharacters = require('./deleteAllCharacters');
const deleteOneCharacter = require('./deleteOneCharacter');


module.exports = {
    '/movies': {
        ...getAll,
        ...create,
        ...deleteAll
    },
    '/movies/{id}': {
        ...getOne,
        ...update,
        ...deleteOne
    },
    '/movies/{movie_id}/characters': {
        ...addCharacter,
        ...deleteAllCharacters
    },
    '/movies/{movie_id}/characters/{character_id}': {
        ...deleteOneCharacter
    }
}