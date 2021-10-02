module.exports = {
    post: {
        tags: ['AUTH'],
        summary: 'Login de usuario.',
        description: "Accede a la API mediante usuario (email) y contraseña (password). Recibe un token de sesion.",
        operationId: "authLogin",
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