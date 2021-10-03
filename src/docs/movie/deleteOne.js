module.exports = {
    delete: {
        tags: ['MOVIES'],
        summary: "Eliminar una película o serie.",
        description: 'Elimina una película/serie mediante su ID. Recibe un mensaje indicando el id de la película/serie eliminada.',
        operationId: "deleteOneMovie",
        parameters: [
            {
                $ref: "#/components/parameters/idParam"
            }
        ],
        responses: {
            '200': {
                description: 'Película/serie eliminada correctamente.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra la película/serie solicitado.'
            },
            '409': {
                description: 'No se puede eliminar la película/serie ya que existen personajes asociados.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}