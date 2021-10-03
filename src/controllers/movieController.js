/** MOVIE CONTROLLER*/

const MovieSvc = require('../services/movieService');

const getAll = async (req, res, next) => {
    try {
        const { title, genre_id, order } = req.query;
        let response = {};

        if (!title && !genre_id) {
            response = await MovieSvc.getAll(order);
        }

        if (title) {
            response = await MovieSvc.searchByTitle(title, order);
        }

        if (genre_id) {
            response = await MovieSvc.filterByGenre(genre_id, order);
        }

        res.send(response);
    } catch (error) {
        next(error);
    }
}

const getOne = async (req, res, next) => {
    try {
        const id = req.params.id;

        const response = await MovieSvc.getOne(id);


        res.send(response);
    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await MovieSvc.create(data);


        res.send(response);
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const response = await MovieSvc.update(id, data);

        res.send(response);
    } catch (error) {
        next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const id = req.params.id;

        const response = await MovieSvc.deleteOne(id);

        res.send({ "Message": `La pelicula ${id} se elimino correctamente.` });
    } catch (error) {
        next(error);
    }
}

const deleteAll = async (req, res, next) => {
    try {
        const response = await MovieSvc.deleteAll();

        res.send({ "Message": `Se eliminaron ${response} Peliculas y/o Series en total.` });
    } catch (error) {
        next(error);
    }
}

// CHARACTERS ASSOC

const addCharacter = async (req, res, next) => {
    try {
        const  movie_id  = parseInt(req.params.movie_id, 10);
        const { character_id } = req.body;

        const response = await MovieSvc.addCharacter(movie_id, character_id);

        res.send(response);
    } catch (error) {
        next(error);
    }
}

const deleteOneCharacter = async (req, res, next) => {
    try {
        const { movie_id, character_id } = req.params;

        const response = await MovieSvc.deleteOneCharacter(movie_id, character_id);

        res.send({'Message': `Se ha eliminado el Personaje ${character_id} de la Pelicula o Serie ${movie_id}.`});
    } catch (error) {
        next(error);
    }
}

const deleteAllCharacters = async (req, res, next) => {
    try {
        const { movie_id } = req.params;

        const response = await MovieSvc.deleteAllCharacters(movie_id);

        res.send({'Message': `Se han eliminado ${response} personajes de la Pelicula o Serie ${movie_id}.`});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
    deleteAll,
    //
    addCharacter,
    deleteOneCharacter,
    deleteAllCharacters
}