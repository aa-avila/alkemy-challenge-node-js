module.exports = {
    get: {
        tags: ['CHARACTERS'],
        summary: 'Obtener un personaje',
        description: "Obtener el detalle de un personaje mediante su ID. Devuelve un objeto con sus atributos y películas/series asociadas a éste.",
        operationId: "getOneCharacter",
        parameters: [
            {
                $ref: "#/components/parameters/idParam"
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