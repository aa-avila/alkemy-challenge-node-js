/** GENRES */
//
// GET /genres => devuelve listado de genres (id, image, name)
//
// GET /genres/:id => detalle de pelicula + characters asociados
//
// POST /genres => crea nueva genero
//
// PUT /genres/:id => actualiza genero
// .... (idea): no permite actualizar el nombre en caso de haber peliculas o personajes asociados al genero que se quiere eliminar
//
// DELETE /genres/:id => elimina genero
// .... (idea): no permite eliminar genero si hay peliculas o personajes asociados al mismo


const Genre = require('../models/genreModel');
const Movie = require('../models/movieModel');


const getAll = async () => {
    try {
        // Traer todos los registros, excluir campos createdAt y UpdatedAt
        const response = await Genre.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}

const getOne = async (id) => {
    try {
        // Trae el registro cuyo id coincida con el de la solicitud
        const response = await Genre.findOne({
            where: {
                id: id
            },
            include: [Movie],
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }
        });

        // Arroja error en caso de que no se encuentre dicho id
        if (response === null) {
            const error = new Error(`No se encuentra el genero ${id}.`);
            error.status = 404;
            throw error;
        }

        return response;
    } catch (error) {
        throw error;
    }
}

const create = async (data) => {
    try {
        // TODO: comments
        const { name, image} = data;

        const response = await Genre.create({ name: name, image: image});

        return response;
    } catch (error) {
        throw error;
    }
}

const update = async (id, data) => {
    try {
        const { name, image } = data;

        // Verificar si existe el genero antes de hacer el update
        // si no existe, arroja error:
        const genreToUpdate = await Genre.findByPk(id);

        if (!genreToUpdate) {
            const error = new Error(`El genero ${id} no existe.`);
            error.status = 404;
            throw error;
        }

        // Actualiza BD
        const response = await Genre.update({ name: name, image: image }, {
            where: {
                id: id
            }
        });

        // Traemos la entrada actuallizada y la enviamos como respuesta
        const genre = await Genre.findOne({
            where: {
                id: id
            },
            include: [Movie],
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }
        });

        return (genre);

    } catch (error) {
        throw error;
    }
}

const deleteOne = async (id) => {
    try {
        // TODO: verificar si hay movies relacionados al genero que se quiere borrar
        // si hay relacionados, arrojar error

        // Eliminar genero
        const response = await Genre.destroy({
            where: {
                id: id
            }
        });

        // si la query arroja "0" => dicho registro no existe. Error.
        if (response == 0) {
            const error = new Error(`No se encuentra el genero ${id}.`);
            error.status = 404;
            throw error;
        }

        // respuesta afirmativa
        if (response == 1) {
            return ('OK');
        }
    } catch (error) {
        throw error;
    }
}

const deleteAll = async () => {
    try {
        // TODO: terminar deleteAll\
        // verificar si existen movies relacionadas
        // si hay relaciones, no permite borrar
        
        const response = await Genre.destroy({
            truncate: true
        });

        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
    deleteAll
}