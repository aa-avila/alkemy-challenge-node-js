module.exports = {
    put: {
        tags: ['CHARACTERS'],
        summary: "Actualizar personaje.",
        description: 'Actualiza atributos del personaje indicado por su ID.',
        operationId: "updateCharacter",
        parameters: [
            {
                $ref: "#/components/parameters/idParam"
            }

            // {
            //     name: 'id',
            //     in: 'path',
            //     schema: {
            //         $ref: "#/components/schemas/id"
            //     }
            // }
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
