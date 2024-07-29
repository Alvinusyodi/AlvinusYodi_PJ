const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todo API',
            version: '1.0.0',
            description: 'A simple Express Todo API'
        }
    },
    apis: ['./server.js'] 
};

const specs = swaggerJsDoc(options);

module.exports = {
    swaggerUi,
    specs
};
