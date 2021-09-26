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

    // Project.belongsToMany(User, { through: UserProjects, uniqueKey: 'my_custom_unique' })
}

module.exports = dbAssoc;


//TODO:
/** REFACTORIZAR MODEL ASSOC MOVIE - CHARACTER */
// https://sequelize.org/master/manual/advanced-many-to-many.html
/*
You probably noticed that the User_Profiles table does not have an id field. As mentioned above, it has a composite unique key instead. The name of this composite unique key is chosen automatically by Sequelize but can be customized with the uniqueKey option:

User.belongsToMany(Profile, { through: User_Profiles, uniqueKey: 'my_custom_unique' });
Another possibility, if desired, is to force the through table to have a primary key just like other standard tables. To do this, simply define the primary key in the model:

const User_Profile = sequelize.define('User_Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  selfGranted: DataTypes.BOOLEAN
}, { timestamps: false });
User.belongsToMany(Profile, { through: User_Profile });
Profile.belongsToMany(User, { through: User_Profile });
The above will still create two columns userId and profileId, of course, but instead of setting up a composite unique key on them, the model will use its id column as primary key. Everything else will still work just fine.
*/



// Instead of a string, passing a model directly is also supported, and in that case the given model will be used as the junction model (and no model will be created automatically). For example:
// const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
// const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
// const ActorMovies = sequelize.define('ActorMovies', {
//   MovieId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Movie, // 'Movies' would also work
//       key: 'id'
//     }
//   },
//   ActorId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Actor, // 'Actors' would also work
//       key: 'id'
//     }
//   }
// });
// Movie.belongsToMany(Actor, { through: ActorMovies });
// Actor.belongsToMany(Movie, { through: ActorMovies });
