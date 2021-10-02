const getAll = require('./getAll');
const create = require('./create');
const deleteAll = require('./deleteAll');
const getOne = require('./getOne');
const update = require('./update');
const deleteOne = require('./deleteOne');

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
    }
}