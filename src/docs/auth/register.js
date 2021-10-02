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
                        type: 'object',
                        properties: {
                            email: {
                                type: 'string',
                                description: "Email de usuario",
                                example: "user@server.com"
                            },
                            password: {
                                type: 'string',
                                description: "Clave de usuario",
                                example: "hDoej34Use"
                            }
                        }
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