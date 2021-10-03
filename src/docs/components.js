

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
            user: {
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
            },
            genre_properties: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: "Nombre del género.",
                        example: "Comedia"
                    },
                    image: {
                        type: 'string',
                        description: "Url de la imagen del género.",
                        example: "https://www.pngkit.com/png/detail/876-8767016_disney-comedy-disney-channel.png"
                    }
                }
            },
            character_properties: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: "Nombre del personaje.",
                        example: "Cruella de Vil"
                    },
                    age: {
                        type: 'integer',
                        description: "Edad del personaje.",
                        example: 46
                    },
                    weight: {
                        type: 'integer',
                        description: "Peso del personaje.",
                        example: 55
                    },
                    story: {
                        type: 'string',
                        description: "Historia del personaje.",
                        example: "Cruella de Vil es una mujer obsesionada por los abrigos de piel. Tiene la mitad izquierda de su cabello blanco y la mitad derecha de color negro, y siempre intenta secuestrar a unos dálmatas cachorros para quitarles la piel, usando a sus dos sirvientes, dos ladrones llamados Horacio y Gaspar."
                    },
                    image: {
                        type: 'string',
                        description: "Url de la imagen del personaje.",
                        example: "https://i.pinimg.com/564x/ed/de/1e/edde1e6684dacab63f7fd994040c896d.jpg"
                    }
                }
            },
            movie_properties: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: "Nombre de la película/serie.",
                        example: "101 dalmatas"
                    },
                    releaseDate: {
                        type: 'string',
                        description: "Fecha de lanzamiento (YYYY-MM-DD).",
                        example: "1961-01-25"
                    },
                    rating: {
                        type: 'integer',
                        description: "Calificación (1-5).",
                        example: 4
                    },
                    genre_id: {
                        type: 'integer',
                        description: "ID del género.",
                        example: 1
                    },
                    image: {
                        type: 'string',
                        description: "Url de la imagen de la película/serie.",
                        example: "https://http2.mlstatic.com/D_NQ_NP_625551-MLA45034977254_022021-O.jpg"
                    }
                }
            }
        },
        parameters: {
            idParam: {
                name: 'id',
                in: 'path',
                description: 'ID único de identificación del elemento en la BD.',
                schema: {
                    type: 'integer',
                    example: 32
                }
            }
        }
    }
}