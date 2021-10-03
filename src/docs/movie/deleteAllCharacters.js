module.exports = {
    delete:{
        tags: ['MOVIES'],
        summary: 'Quitar personajes de una película/serie.',
        description: "Desvincular todos los personajes asociados a una determinada película/serie. Devuelve un mensaje indicando la cantidad de elementos eliminados y el id de la película/serie afectada. // NOTA: esta operación no elimina los registros originales de los personajes, sino que borra las asociaciones entre los personajes y la película/serie objetivo.",
        operationId: "movie_deleteAllCharacters",
        parameters:[
            {
                name: 'movie_id',
                in: 'path',
                description: 'ID de película/serie a modificar.',
                schema: {
                    type: 'integer',
                    example: 2

                }
            }
        ],
        responses:{
            '200': {
                description: 'Se quitaron todos los personajes asociados a la película/serie.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra la película/serie solicitada.'
            },
            '409': {
                description: 'No existen personajes relacionados a la película/serie solicitada.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
