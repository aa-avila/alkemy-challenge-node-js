const Genre = require('../models/genreModel');
const Movie = require('../models/movieModel');
const Character = require('../models/characterModel');


const dbAssoc = () => {

    // Asociacion "One To Many"
    // Sequelize genera una columna "genre_id" en "movies"
    Genre.hasMany(Movie, {
        foreignKey: 'genre_id'
    });

    Movie.belongsTo(Genre, {
        foreignKey: 'genre_id'
    });


    // Asociacion "Many To Many"
    Movie.belongsToMany(Character, {
        through: "movie_character",
        // as: "characters",
        foreignKey: "movie_id",
    });

    Character.belongsToMany(Movie, {
        through: "movie_character",
        // as: "movies",
        foreignKey: "character_id",
    });
}

module.exports = dbAssoc;



// DATITA PARA MOVIE - CHARACTER:
//
// const Foo = sequelize.define('Foo', { name: DataTypes.TEXT });
// const Bar = sequelize.define('Bar', { name: DataTypes.TEXT });
// Foo.belongsToMany(Bar, { through: 'Foo_Bar' });
// Bar.belongsToMany(Foo, { through: 'Foo_Bar' });

// await sequelize.sync();
// const foo = await Foo.create({ name: 'foo' });
// const bar = await Bar.create({ name: 'bar' });
// await foo.addBar(bar);
// const fetchedFoo = Foo.findOne({ include: Bar });
// console.log(JSON.stringify(fetchedFoo, null, 2));
