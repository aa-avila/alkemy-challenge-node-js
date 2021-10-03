module.exports = {
    post: {
        tags: ['GENRES'],
        summary: "Crear un nuevo género.",
        description: 'Crear un nuevo género a partir de sus atributos básicos. El nombre (name) es requerido y no puede existir previamente en la BD. Devuelve un objeto con todos los atributos del género recién creado.',
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
