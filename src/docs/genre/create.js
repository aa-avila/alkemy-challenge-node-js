module.exports = {
    post: {
        tags: ['GENRES'],
        description: "Crear un nuevo género.",
        operationId: "createGenre",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            name: {
                                type: 'string',
                                description: "Nombre del género.",
                                example: "Comedia"
                            },
                            image: {
                                type: 'string',
                                description: "Url de la imagen del género.",
                                example: "https://www.pngkit.com/png/detail/876-8767016_disney-comedy-disney-channel.png"
                            },
                        }
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Género creado correctamente."
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
