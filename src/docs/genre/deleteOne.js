module.exports = {
    delete: {
        tags: ['GENRES'],
        summary: "Eliminar un género.",
        description: 'Eliminar un género mediante su ID. Devuelve un mensaje indicando el id del género eliminado.',
        operationId: "deleteOneGenre",
        parameters: [
            {
                $ref: "#/components/parameters/idParam"
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