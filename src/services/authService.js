/** AUTH */
//
// POST /auth/login => recibe user (email) + password || devuelve token o msj error
// POST /auth/register => recibe user (email) + password || devuelve OK o msj error || Envia email en caso de registro exitoso

const User = require('../models/userModel');
// import JWT
// import bcrypt

const login = async () => {
    try {
        const response = {};

        return response;
    } catch (error) {
        return error.message;
    }
}

const register = async (id) => {
    try {
        const response = {};

        return response;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    login,
    register
}