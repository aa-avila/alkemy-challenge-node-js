module.exports = {
    post: {
        tags: ['MOVIES'],
        summary: "Crear una nueva película o serie.",
        description: 'Crear una nueva película o serie a partir de sus atributos básicos. El título (title) es requerido y no puede existir previamente en la BD. Devuelve un objeto con todos los atributos de la película o serie recién creada.',
        operationId: "createMovie",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: "#/components/schemas/movie_properties"
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Película/serie creada correctamente."
            },
            '400': {
                description: 'Error en la petición.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '400': {
                description: 'Error en los datos enviados.'
            },
            '404': {
                description: 'El género indicado no existe.'
            },
            '409': {
                description: 'Ya existe película/serie con el mismo nombre.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
