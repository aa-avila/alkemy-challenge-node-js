module.exports = {
    get: {
        tags: ['MOVIES'],
        summary: 'Obtener una película o serie',
        description: "Obtiene el detalle de una película/serie mediante su ID. Recibe un objeto con sus atributos, incluyendo género y personajes asociados.",
        operationId: "getOneMovie",
        parameters: [
            {
                $ref: "#/components/parameters/idParam"
            }
        ],
        responses: {
            '200': {
                description: 'Detalle del la película/serie.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra la película/serie solicitada.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}