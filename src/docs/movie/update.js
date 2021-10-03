module.exports = {
    put: {
        tags: ['MOVIES'],
        summary: "Actualizar una película o serie.",
        description: 'Actualizar atributos la película/serie indicada por su ID. Devuelve un objeto con sus atributos, incluyendo género y personajes asociados, correspondiente a la película/serie actualizada.',
        operationId: "updateMovie",
        parameters: [
            {
                $ref: "#/components/parameters/idParam"
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: "#/components/schemas/movie_properties"
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Película/serie actualizada correctamente."
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra la película/serie solicitada.'
            },
            '409': {
                description: 'No se puede actualizar la película/serie ya que existen personajes asociados.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
