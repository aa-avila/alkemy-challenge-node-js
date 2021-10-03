module.exports = {
    get: {
        tags: ['CHARACTERS'],
        summary: 'Obtener personajes.',
        description: 'Obtener un conjunto de personajes. Es posible buscar por nombre (name) ya sea completo o incompleto. Además es posible filtrar por alguno de los atributos: edad (age), peso (weight) o pelicula/serie asociada (movie_id). Los parámetros de la query son opcionales y, en caso de no proporcionar ninguno, se obtienen todos los personajes registrados en la BD. Devuelve un array de objetos que cumplen con las condiciones de la petición. En caso de no encontrar elementos, el servidor devuelve un array vacío. // NOTA: los parámetros de búsqueda/filtro NO son combinables y, en caso de proporcionar más de uno, el servidor ejecuta la solicitud utilizando sólo uno, según el siguiente orden de prioridad: no-params > name > age > weight > movie_id.',
        operationId: "getAllCharacters",
        parameters: [
            {
                name: 'name',
                in: 'query',
                description: 'Nombre del personaje a buscar.',
                schema: {
                    type: 'string',
                    example: 'cruella'
                }
            },
            {
                name: 'age',
                in: 'query',
                description: 'Edad del personaje.',
                schema: {
                    type: 'integer',
                    example: 46
                }
            },
            {
                name: 'weight',
                in: 'query',
                description: 'Peso del personaje.',
                schema: {
                    type: 'integer',
                    example: 55
                }
            },
            {
                name: 'movie_id',
                in: 'query',
                description: 'Pelicula/serie en la que participó.',
                schema: {
                    type: 'integer',
                    example: 3
                }
            }
        ],
        responses: {
            '200': {
                description: 'Todos los personajes que coinciden con los parámetros de la petición.'
            },
            '400': {
                description: 'Error en los parámetros de la petición.'
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