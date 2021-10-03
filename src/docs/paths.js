const authPaths = require('./auth');
const genrePaths = require('./genre');
const characterPaths = require('./character');
const moviePaths = require('./movie');


module.exports = {
    paths: {
        ...authPaths,
        ...genrePaths,
        ...characterPaths,
        ...moviePaths
    }
}