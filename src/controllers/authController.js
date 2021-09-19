/** AUTH */
//
// POST /auth/login => recibe user (email) + password || devuelve token o msj error
// POST /auth/register => recibe user (email) + password || devuelve OK o msj error || Envia email en caso de registro exitoso

const AuthSvc = require('../services/authService');

const login = async (req, res) => {
    try {
        const response = {};

        res.send(response);
    } catch (error) {
        res.status(500).send({ 'Error': error.message });
        console.log(error.message);
    }
}

const register = async (req, res) => {
    try {
        const response = {};

        res.send(response);
    } catch (error) {
        res.status(500).send({ 'Error': error.message });
        console.log(error.message);
    }
}


module.exports = {
    login,
    register
}