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
module.exports = app;