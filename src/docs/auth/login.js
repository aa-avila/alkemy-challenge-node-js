module.exports = {
    post: {
        tags: ['AUTH'],
        description: "Login de usuario, obtener token de sesion.",
        operationId: "authLogin",
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
                description: "Login correcto"
            },
            '400': {
                description: "Error de login"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}