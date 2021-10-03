const customPort = process.env.CUSTOM_PORT;
const PORT = process.env.PORT || customPort;

module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Disney World API',
        version: '1.0.0',
        description: 'API desarrollada para la realización del Challenge Backend NodeJS de ALKEMY.',
        contact: {
            name: 'Agustín Avila Humerez',
            email: 'agualvila@gmail.com',
            url: 'https://github.com/aa-avila/alkemy-challenge-node-js'
        }
    },
    servers: [
        {
            url: `http://localhost:${PORT}`,
            description: 'Local development server'
        }
    ]
};