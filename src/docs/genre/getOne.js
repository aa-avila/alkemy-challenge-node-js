module.exports = {
    get: {
        tags: ['GENRES'],
        summary: 'Obtener un género.',
        description: "Obtiene el detalle de un género mediante su ID. Recibe un objeto con sus atributos y películas/series asociadas a éste.",
        operationId: "getOneGenre",
        parameters: [
            {
                $ref: "#/components/parameters/idParam"
            }
        ],
        responses: {
            '200': {
                description: 'Detalle del género.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el género solicitado.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}