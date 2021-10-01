const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 3000;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'DisneyWorld API',
            version: '1.0.0',
            description: 'API desarrollada para la realización del Challenge Backend NodeJS de ALKEMY.',
        },
        servers: [
            {
               url: `http://localhost:${PORT}`
            }
        ]
    },
    apis: [ './routes/*.js' ]
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
};