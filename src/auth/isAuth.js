const jwt = require('jsonwebtoken');

// Comprobar autenticacion
const isAuth = async (req, res, next) => {
    try {
        // tomamos el token desde el header de la peticion
        let token = req.headers['authorization'];

        // si no hay token, error
        if (!token) {
            const error = new Error("No estas logueado.");
            error.status = 401;
            throw error;
        }

        // si hay token, le quitamos el bearer
        token = token.replace('Bearer ', '');

        // "decodificamos" el token con nuestra palabra secreta
        jwt.verify(token, 'Secret', (err, user) => {
            if (err) {
                const error = new Error("Token invalido.");
                error.status = 401;
                throw error;
            }
            //console.log(user); //-> "user" contiene la info contenida en el token
        });

        // si esta todo ok, sigue
        next();
    } catch (error) {
        // console.log('Error en isAuth:', error.message);
        next(error);
    }
}

module.exports = isAuth;
