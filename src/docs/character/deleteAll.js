module.exports = {
    delete:{
        tags: ['CHARACTERS'],
        summary: 'Eliminar todos los personajes.',
        description: "Borrar todos los personajes registrados en la BD, a menos que existan películas/series asociadas a por lo menos un personaje. Devuelve un mensaje indicando la cantidad de elementos eliminados",
        operationId: "deleteAllCharacters",
        parameters:[],
        responses:{
            '200': {
                description: 'Se eliminaron todos los personajes.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '409': {
                description: 'No se pueden eliminar los personajes ya que existen peliculas o series asociadas.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
