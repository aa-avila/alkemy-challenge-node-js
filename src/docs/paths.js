const authPaths = require('./auth');
const genrePaths = require('./genre');
const characterPaths = require('./character');



module.exports = {
    paths: {
        ...authPaths,
        ...genrePaths,
        ...characterPaths
    }
}