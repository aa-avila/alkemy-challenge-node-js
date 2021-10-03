module.exports = {
    delete:{
        tags: ['MOVIES'],
        summary: 'Eliminar todas las películas y series.',
        description: "Borrar todas las películas/series registradas en la BD, a menos que existan personajes asociados a por lo menos una película/serie. Devuelve un mensaje indicando la cantidad de elementos eliminados.",
        operationId: "deleteAllMovies",
        parameters:[],
        responses:{
            '200': {
                description: 'Se eliminaron todos las películas y series.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '409': {
                description: 'No se pueden eliminar las películas y series ya que existen personajes asociados.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
