module.exports = {
    post: {
        tags: ['CHARACTERS'],
        summary: "Crear un nuevo personaje.",
        description: 'Crear un nuevo personaje a partir de sus atributos básicos. El nombre (name) es requerido y no puede existir previamente en la BD. Devuelve un objeto con todos los atributos del personaje recién creado.',
        operationId: "createCharacter",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: "#/components/schemas/character_properties"
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Personaje creado correctamente."
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '409': {
                description: 'Ya existe personaje con el mismo nombre.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
