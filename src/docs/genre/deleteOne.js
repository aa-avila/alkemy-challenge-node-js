module.exports = {
    delete: {
        tags: ['GENRES'],
        description: "Eliminar un género.",
        operationId: "deleteOneGenre",
        parameters: [
            {
                name: 'id',
                in: 'path',
                schema: {
                    $ref:"#/components/schemas/id"
                }
            }
        ],
        responses: {
            '200': {
                description: 'Género eliminado correctamente.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el género solicitado.'
            },
            '409': {
                description: 'No se puede eliminar el genero ya que existen peliculas o series asociados.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}