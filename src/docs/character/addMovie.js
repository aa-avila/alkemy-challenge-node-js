module.exports = {
    post: {
        tags: ['CHARACTERS'],
        summary: "Agregar una película o serie a un personaje.",
        description: 'Agregar una película/serie a un personaje a partir de sus IDs respectivos. Devuelve un objeto con los atributos de la asociación "movie-character" recién creada.',
        operationId: "character_addMovie",
        parameters: [
            {
                name: 'character_id',
                in: 'path',
                description: 'ID del personaje a modificar.',
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
                            movie_id: {
                                type: 'integer',
                                description: "ID de la película/serie a agregar.",
                                example: 3
                            }
                        }
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Película/serie agregada correctamente."
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el personaje o la película/serie solicitados.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}