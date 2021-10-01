module.exports = {
    get: {
        tags: ['GENRES'],
        description: "Obtener todos los géneros registrados.",
        operationId: "genreGetAll",
        parameters: [],
        responses: {
            '200': {
                description: 'Géneros almacenados en la base de datos.'
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