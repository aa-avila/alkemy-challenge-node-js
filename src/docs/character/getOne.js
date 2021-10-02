module.exports = {
    get: {
        tags: ['CHARACTERS'],
        summary: 'Obtener un personaje',
        description: "Obtiene el detalle de un personaje mediante su ID. Recibe un objeto con sus atributos y películas/series asociadas a éste.",
        operationId: "getOneCharacter",
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
                description: 'Detalle del personaje.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el personaje solicitado.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}