module.exports = {
    delete:{
        tags: ['CHARACTERS'],
        summary: 'Quitar películas/series de un personaje.',
        description: "Desvincular todas las películas/series asociadas a un determinado personaje. Devuelve un mensaje indicando la cantidad de elementos eliminados y el id del personaje afectado. // NOTA: esta operación no elimina los registros originales de las películas/series, sino que borra las asociaciones entre las películas/series y el personaje objetivo.",
        operationId: "character_deleteAllMovies",
        parameters:[
            {
                name: 'character_id',
                in: 'path',
                description: 'ID del personaje a modificar.',
                schema: {
                    type: 'integer',
                    example: 2

                }
            }
        ],
        responses:{
            '200': {
                description: 'Se eliminaron todos las películas/series relacionadas al personaje.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el personaje solicitado.'
            },
            '409': {
                description: 'No existen películas/series relacionadas al personaje solicitado.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
