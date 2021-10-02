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
                        $ref: "#/components/schemas/genre_properties"
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
            '409': {
                description: 'Ya existe género con el mismo nombre.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
