/** AUTH */
//
// POST /auth/login => recibe user (email) + password || devuelve token o msj error
// POST /auth/register => recibe user (email) + password || devuelve token o msj error || Envia email en caso de registro exitoso

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendEmail = require('./sendgridRegEmail');

const login = async (email, password) => {
    try {
        // Verificamos que se envien todos los datos
        if (!email || !password) {
            const error = new Error("No enviaste todos los datos necesarios.");
            error.status = 400;
            throw error;
        }

        // Buscamos el usario (email) en la base de datos.
        // si no existe, generamos error. Si existe, sigue.
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        // Si no existe el usuario en la base de datos, devuelve error
        if (!user) {
            const error = new Error("El email proporcionado no se encuentra registrado.");
            error.status = 400;
            throw error;
        }

        // Si existe el user, tomamos la clave encriptada almacenada en la BD
        const encrPass = user.password;

        // Verificar la clave
        if (!bcrypt.compareSync(password, encrPass)) {
            const error = new Error("Contraseña invalida.");
            error.status = 400;
            throw error;
        }

        // Si la clave es correcta, generar sesion
        const tokenData = {
            email: email,
            user_id: user.id
        };

        const token = jwt.sign(tokenData, 'Secret', {
            expiresIn: 60 * 60 * 24 // expira en 24 hs
        });

        // enviamos token
        return ({ token });
    } catch (error) {
        throw error;
    }
}

const register = async (email, password) => {
    try {
        // Verificamos que se envien todos los datos
        if (!email || !password) {
            const error = new Error("No enviaste todos los datos necesarios.");
            error.status = 400;
            throw error;
        }

        // Buscamos el usario (email) en la base de datos.
        // si ya existe, generamos error. Si no existe, sigue.
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        // Si ya existe el usuario en la base de datos, devuelve error
        if (user) {
            const error = new Error("El email ya se encuentra registrado.");
            error.status = 400;
            throw error;
        }

        // Si es nuevo usuario, encriptar pass y luego crear user
        const encrPass = await bcrypt.hash(password, 10);

        const newUser = await User.create({ email: email, password: encrPass });

        // Si el registro es correcto, generar sesion
        const tokenData = {
            email: email,
            user_id: newUser.id
        };

        const token = jwt.sign(tokenData, 'Secret', {
            expiresIn: 60 * 60 * 24 // expira en 24 hs
        });


        // sendgrid registration email
        await sendEmail(email, newUser.id, password);

        // enviamos token
        return ({ token });
    } catch (error) {
        throw error;
    }
}


module.exports = {
    login,
    register
}