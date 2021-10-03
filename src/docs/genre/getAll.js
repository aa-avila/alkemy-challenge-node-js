module.exports = {
    get: {
        tags: ['GENRES'],
        summary: 'Obtener géneros.',
        description: "Obtener todos los géneros registrados en la BD. Devuelve un array de objetos con los atributos de cada género. En caso de no encontrar elementos, el servidor devuelve un array vacío.",
        operationId: "getAllGenres",
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