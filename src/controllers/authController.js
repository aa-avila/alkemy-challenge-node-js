/** AUTH CONTROLLER*/

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