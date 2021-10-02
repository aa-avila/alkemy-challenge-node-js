module.exports = {
    post: {
        tags: ['AUTH'],
        summary: 'Registro de usuario.',
        description: "Registro de usuario por primera vez mediante usuario (email) y contraseña (password). Recibe un token de sesion.",
        operationId: "authRegister",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: "#/components/schemas/user"

                    }
                }
            }
        },
        responses: {
            '200': {
                description: "Registro existoso"
            },
            '400': {
                description: "Error de registro"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}