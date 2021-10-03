const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const swaggerDoc = require('./docs');

const authRoutes = require('./routes/authRoutes');
const genreRoutes = require('./routes/genreRoutes');
const characterRoutes = require('./routes/characterRoutes');
const movieRoutes = require('./routes/movieRoutes');


/*********************/
// EXPRESS APP
const app = express();

// SET PORT
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

/*********************/
// MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*********************/
// ROUTES
app.get('/', (req, res) => {
    res.send('Hola!');
});

app.use('/', authRoutes);
app.use('/', genreRoutes);
app.use('/', characterRoutes);
app.use('/', movieRoutes);

// Swagger api-docs
swaggerDoc(app);

/*********************/
// ERROR HANDLING
// Error 404
app.use((req, res, next) => {
    const error = new Error("El recurso solicitado no existe.");
    error.status = 404;
    next(error);
});

// Error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({ 'Error': error.message || 'Internal Server Error.' });
    console.log(error.message);
});

/*********************/
module.exports = app;