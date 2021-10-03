module.exports = {
    delete: {
        tags: ['MOVIES'],
        summary: "Quitar un personaje de una película/serie.",
        description: 'Desvincula un personaje de una película/serie mediante sus respectivos IDs. Devuelve un mensaje indicando el id del personaje que se ha quitado y el id de la película/serie afectada. // NOTA: esta operación no elimina el registro original del personaje, sino que borra la asociación entre el personaje y la película/serie objetivo.',
        operationId: "movie_deleteOneCharacter",
        parameters: [
            {
                name: 'movie_id',
                in: 'path',
                description: 'ID de la película/serie a modificar.',
                schema: {
                    type: 'integer',
                    example: 2
                }
            },
            {
                name: 'character_id',
                in: 'path',
                description: 'ID del personaje a quitar.',
                schema: {
                    type: 'integer',
                    example: 3
                }
            }
        ],
        responses: {
            '200': {
                description: 'Personaje quitado correctamente.'
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