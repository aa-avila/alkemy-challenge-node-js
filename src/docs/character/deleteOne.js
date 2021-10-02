module.exports = {
    delete: {
        tags: ['CHARACTERS'],
        summary: "Eliminar un personaje.",
        description: 'Elimina un personaje mediante su ID. Recibe un mensaje indicando el id del personaje eliminado.',
        operationId: "deleteOneCharacter",
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
                description: 'Personaje eliminado correctamente.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el personaje solicitado.'
            },
            '409': {
                description: 'No se puede eliminar el personaje ya que existen peliculas o series asociadas.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}