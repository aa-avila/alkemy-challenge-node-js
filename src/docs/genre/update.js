module.exports = {
    put: {
        tags: ['GENRES'],
        summary: "Actualizar un género.",
        description: 'Actualizar atributos del género indicado por su ID. Devuelve un objeto con los atributos y películas/series asociadas, correspondiente al género actualizado.',
        operationId: "updateGenre",
        parameters: [
            {
                $ref: "#/components/parameters/idParam"
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
