module.exports = {
    delete:{
        tags: ['GENRES'],
        summary: 'Eliminar todos los géneros.',
        description: "Borrar todos los géneros registrados en la BD, a menos que existan películas/series asociadas a por lo menos un género. Devuelve un mensaje indicando la cantidad de elementos eliminados",
        operationId: "deleteAllGenres",
        parameters:[],
        responses:{
            '200': {
                description: 'Se eliminaron todos los géneros.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '409': {
                description: 'No se pueden eliminar los generos ya que existen peliculas o series asociados.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
