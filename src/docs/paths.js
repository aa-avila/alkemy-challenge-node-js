const authPaths = require('./auth');
const genrePaths = require('./genre');


module.exports = {
    paths: {
        ...authPaths,
        ...genrePaths
    }
}