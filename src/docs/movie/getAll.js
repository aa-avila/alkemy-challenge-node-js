module.exports = {
    get: {
        tags: ['MOVIES'],
        summary: 'Obtener películas o series.',
        description: 'Obtiene un conjunto de películas o series. Es posible buscar por título (title) ya sea completo o incompleto y filtrar por género (genre_id). Además permite orenar los resultados según su fecha de lanzamiento, de forma ascendente o descentente (order = ASC || DESC). Los parámetros de la query son opcionales y, en caso de no proporcionar ninguno, se obtienen todas las películas/series registrados en la BD. Recibe un array de objetos que cumplen con las condiciones de la petición. En caso de no encontrar elementos, el servidor devuelve un array vacío. // NOTA: los parámetros de búsqueda/filtro (title, genre_id) NO son combinables y, en caso de proporcionar ambos, el servidor ejecuta la solicitud utilizando sólo uno, según el siguiente orden de prioridad: no-params > title > genre_id. Por otro lado, el parámetro orden (order) puede usarse solo o en simultáneo junto a cualquiera de los otros (title, genre_id), permitiendo de esta manera ordenar los resultados de la forma deseada.',
        operationId: "getAllMovies",
        parameters: [
            {
                name: 'title',
                in: 'query',
                description: 'Título de la película/serie.',
                schema: {
                    type: 'string',
                    example: '101 dalmatas'
                }
            },
            {
                name: 'genre_id',
                in: 'query',
                description: 'Género de la película/serie.',
                schema: {
                    type: 'integer',
                    example: 3
                }
            },
            {
                name: 'order',
                in: 'query',
                description: 'Orden de resultados según fecha de estreno (ASC / DESC).',
                schema: {
                    type: 'string',
                    example: 'DESC'
                }
            }
        ],
        responses: {
            '200': {
                description: 'Todos las películas/series que coinciden con los parámetros de la petición.'
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