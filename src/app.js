const express = require('express');
const morgan = require('morgan');

const characterRoutes = require('./routes/characterRoutes');
const movieRoutes = require('./routes/movieRoutes');
const genreRoutes = require('./routes/genreRoutes');
const authRoutes = require('./routes/authRoutes');


/*********************/
// EXPRESS APP
const app = express();

// SET PORT
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

/*********************/
// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*********************/
// ROUTES
app.get('/', (req, res) => {
    res.send('Hola!');
});

app.use('/', characterRoutes);
app.use('/', movieRoutes);
app.use('/', genreRoutes);
app.use('/', authRoutes);

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