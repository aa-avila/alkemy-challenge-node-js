/** AUTH */
//
// POST /auth/login => recibe user (email) + password || devuelve token o msj error
// POST /auth/register => recibe user (email) + password || devuelve OK o msj error || Envia email en caso de registro exitoso

const AuthSvc = require('../services/authService');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const response = await AuthSvc.login(email, password);

        res.send(response);
    } catch (error) {
        next(error);
    }
}

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const response = await AuthSvc.register(email, password);

        res.send(response);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    login,
    register
}