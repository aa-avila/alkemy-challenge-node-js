const getAll = require('./getAll');
const getOne = require('./getOne');
const create = require('./create');
const update = require('./update');
const deleteOne = require('./deleteOne');
const deleteAll = require('./deleteAll');

module.exports = {
    '/genres': {
        ...getAll,
        ...create,
        ...deleteAll
    },
    '/genres/{id}':
    {
        ...getOne,
        ...update,
        ...deleteOne
    }
}