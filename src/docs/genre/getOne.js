module.exports = {
    get: {
        tags: ['GENRES'],
        description: "Obtener detalle de un género.",
        operationId: "genreGetOne",
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
                description: 'Detalle del género.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '401': {
                description: 'No se encuentra el recurso solicitado.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}