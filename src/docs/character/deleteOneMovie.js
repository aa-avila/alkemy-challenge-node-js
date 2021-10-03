module.exports = {
    delete: {
        tags: ['CHARACTERS'],
        summary: "Quitar una película/serie de un personaje.",
        description: 'Desvincula una película/serie de un personaje mediante sus respectivos IDs. Devuelve un mensaje indicando el id de la película/serie que se ha quitado y el id del personaje afectado. // NOTA: esta operación no elimina el registro original de la película/serie, sino que borra la asociación entre la película/serie y el personaje objetivo.',
        operationId: "character_deleteOneMovie",
        parameters: [
            {
                name: 'character_id',
                in: 'path',
                description: 'ID del personaje a modificar.',
                schema: {
                    type: 'integer',
                    example: 2
                }
            },
            {
                name: 'movie_id',
                in: 'path',
                description: 'ID de la película/serie a quitar.',
                schema: {
                    type: 'integer',
                    example: 3
                }
            }
        ],
        responses: {
            '200': {
                description: 'Película/serie quitada correctamente.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el personaje o la película/serie solicitados.'
            },
            '409': {
                description: 'No existe relacion entre el personaje y la película/serie indicados.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}