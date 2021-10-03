module.exports = {
    post: {
        tags: ['MOVIES'],
        summary: "Agregar un personaje a una película o serie.",
        description: 'Agregar un personaje a la película/serie a partir de sus IDs respectivos. Devuelve un objeto con los atributos de la asociación "movie-character" recién creada.',
        operationId: "movie_addCharacter",
        parameters: [
            {
                name: 'movie_id',
                in: 'path',
                description: 'ID de película/serie a modificar.',
                schema: {
                    type: 'integer',
                    example: 2

                }
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            character_id: {
                                type: 'integer',
                                description: "ID del personaje a agregar.",
                                example: 3
                            }
                        }
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Personaje agregado correctamente."
            },
            '400': {
                description: 'Error en la petición.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el personaje o la película/serie solicitados.'
            },
            '409': {
                description: 'El personaje ya está asociado a la película/serie.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}