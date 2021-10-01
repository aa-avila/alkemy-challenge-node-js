

module.exports = {
    components: {
        securitySchemes: {
            bearerAuth: {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT",
            },
        },
        schemas: {
            id: {
                type: 'integer',
                description: "ID único del registro en la BD",
                example: 23
            },

        }
    }
}