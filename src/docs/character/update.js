module.exports = {
    put: {
        tags: ['CHARACTERS'],
        summary: "Actualizar un personaje.",
        description: 'Actualizar atributos del personaje indicado por su ID. Devuelve un objeto con los atributos y películas/series asociadas, correspondiente al personaje actualizado.',
        operationId: "updateCharacter",
        parameters: [
            {
                $ref: "#/components/parameters/idParam"
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: "#/components/schemas/character_properties"
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Personaje actualizado correctamente."
            },
            '400': {
                description: 'Error en la petición.'
            },
            '401': {
                description: 'Error de autenticación.'
            },
            '404': {
                description: 'No se encuentra el personaje solicitado.'
            },
            '409': {
                description: 'No se puede actualizar el personaje ya que existen películas o series asociadas.'
            },
            '500': {
                description: 'Error del servidor.'
            }
        }
    }
}
