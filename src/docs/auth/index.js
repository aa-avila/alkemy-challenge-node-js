const login = require('./login');
const register = require('./register');

module.exports = {
    paths:{
        '/auth/login':{
            ...login
        },
        '/auth/register':{
            ...register
        }
    }
}