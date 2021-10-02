module.exports = {
    put: {
        tags: ['GENRES'],
        description: "Actualizar género.",
        operationId: "updateGenre",
        parameters: [
            {
                name: 'id',
                in: 'path',
                schema: {
                    $ref: "#/components/schemas/id"
                }
            }
        ],
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
                description: "Género actualizado correctamente."
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el género solicitado.'
            },
            '409': {
                description: 'No se puede actualizar el género ya que existen películas o series asociadas.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
