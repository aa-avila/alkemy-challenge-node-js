module.exports = {
    put: {
        tags: ['GENRES'],
        description: "Actualizar género.",
        operationId: "updateGenre",
        parameters: [
            {
                name: 'id',
                in: 'path',
                schema: {
                    $ref: "#/components/schemas/id"
                }
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: "#/components/schemas/genre_properties"
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Género actualizado correctamente."
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el género solicitado.'
            },
            '409': {
                description: 'No se puede actualizar el género ya que existen películas o series asociadas. || El nombre que se está intentando guardar ya existe.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
