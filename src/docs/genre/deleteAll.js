module.exports = {
    delete:{
        tags: ['GENRES'],
        description: "Borrar todos los géneros registrados.",
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
