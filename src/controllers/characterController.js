/** CHARACTERS */
//
// GET /characters => devuelve listado de personajes (id, image, name)
// .... busqueda por name y filtro por age, weight, movies(by idMovie)
//
// GET /characters/:id => detalle del personaje + movies relacionadas
//
// POST /characters => crea nuevo personaje
//
// PUT /characters/:id => actualiza personaje
//
// DELETE /character/:id => elimina personaje
// .... (idea): no permite eliminar character si hay movies asociados a ésta


const CharacterSvc = require('../services/characterService');

const getAll = async (req, res, next) => {
    try {
        const { name, age, weight, movie_id } = req.query;
        let response = [];


        if (!name && !age && !movie_id) {
            response = await CharacterSvc.getAll();
        }

        if (name) {
            response = await CharacterSvc.searchByName(name);
        }

        if (age) {
            response = await CharacterSvc.filterByAge(age);
        }

        if (weight) {
            response = await CharacterSvc.filterByWeight(weight);
        }

        if (movie_id) {
            response = await CharacterSvc.filterByMovie(movie_id);
        }

        res.send(response);
    } catch (error) {
        next(error);
    }
}

const getOne = async (req, res, next) => {
    try {
        const id = req.params.id;

        const response = await CharacterSvc.getOne(id);


        res.send(response);
    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await CharacterSvc.create(data);


        res.send(response);
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const response = await CharacterSvc.update(id, data);


        res.send(response);
    } catch (error) {
        next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        
        const response = await CharacterSvc.deleteOne(id);

        res.send({ "Message": `El personaje ${id} se elimino correctamente.`});
    } catch (error) {
        next(error);
    }
}

const deleteAll = async (req, res, next) => {
    try {
        const response = await CharacterSvc.deleteAll();

        res.send({ "Message": `Se eliminaron ${response} personajes en total.`});
    } catch (error) {
        next(error);
    }
}

// MOVIES ASSOC

const addMovie = async (req, res, next) => {
    try {
        const { character_id } = req.params;
        const { movie_id } = req.body;

        const response = await CharacterSvc.addMovie(character_id, movie_id);

        res.send(response);
    } catch (error) {
        next(error);
    }
}

const deleteOneMovie = async (req, res, next) => {
    try {
        const { character_id, movie_id } = req.params;

        const response = await CharacterSvc.deleteOneMovie(character_id, movie_id);

        res.send({'Message': `Se ha eliminado la Pelicula o Serie ${movie_id} del personaje ${character_id}.`});
    } catch (error) {
        next(error);
    }
}

const deleteAllMovies = async (req, res, next) => {
    try {
        const { character_id } = req.params;

        const response = await CharacterSvc.deleteAllMovies(character_id);

        res.send({'Message': `Se han eliminado ${response} Peliculas y/o Series del personaje ${character_id}.`});
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
    addMovie,
    deleteOneMovie,
    deleteAllMovies
}