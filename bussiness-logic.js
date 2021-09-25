/** Nombre de la base de datos:  disney_world*/
//
/********************************************** */
/******** MODELOS BD *********/

/** PERSONAJE => character (tabla: characters)
 * ID => id
 * Nombre => name
 * Edad => age
 * Peso => weight
 * Historia => story
 * Imagen (url) => image
 * Peliculas o series asociadas => movies (sequelize assoc ManyToMany)
 * (extra):
 * Fecha de creacion => createdAt
 * Fecha de actualizacion => updatedAt
*/

/** PELICULA O SERIE => movie (tabla: movies)
 * ID => id
 * Titulo => title
 * Calificacion => rating (1-5)
 * Fecha de lanzamiento => releaseDate (formato de fecha => AAAA-MM-DD)
 * Imagen (url) => image
 * Personajes asociados => characters (sequelize assoc ManyToMany)
 * (extra):
 * Genero => genre_id (generado mediante sequelize assoc OneToMany)
 * Fecha de creacion => createdAt
 * Fecha de actualizacion => updatedAt
 * 
*/


/** GENERO => genre (tabla: genres)
 * ID => id
 * Nombre => name
 * Imagen (url) => image
 * Peliculas o series asociadas => movies (sequelize assoc OneToMany)
 * (extra):
 * Fecha de creacion => createdAt
 * Fecha de actualizacion => updatedAt
*/

/** USUARIOS => user (tabla: users)
 * ID => id
 * email => email
 * password => password (encriptada)
 * Fecha de creacion => createdAt
 * Fecha de actualizacion => updatedAt
*/



/********************************************** */
/******** ENDPOINTS *********/

/** AUTH */
//
// POST /auth/login => recibe user (email) + password || devuelve token o msj error
// POST /auth/register => recibe user (email) + password || devuelve OK o msj error || Envia email en caso de registro exitoso


/** CHARACTERS */
//
// GET /characters => devuelve listado de personajes (id, image, name)
// .... busqueda por name y filtro por age, weight, movies(by idMovie)
//
// GET /characters/:id => detalle del personaje + movies relacionadas
//
// POST /characters => crea nuevo personaje
//
// PUT /characters/:id => actualiza personaje
//
// DELETE /character/:id => elimina personaje
// .... (idea): no permite eliminar character si hay movies asociados a ésta


/** MOVIES */
//
// GET /movies => devuelve listado de movies (id, image, title, createdAt)
// .... busqueda por title y filtro por genre(idGenre)
// .... orden ASC | DESC (releaseDate)
//
// GET /movies/:id => detalle de pelicula + characters asociados
//
// POST /movies => crea nueva pelicula o serie
//
// PUT /movies/:id => actualiza
//
// DELETE movies/:id => elimina
// .... (idea): no permite eliminar movie si hay personajes asociados a ésta


/** GENRES */
//
// GET /genres => devuelve listado de genres (id, image, name)
//
// GET /genres/:id => detalle de pelicula + characters asociados
//
// POST /genres => crea nueva genero
//
// PUT /genres/:id => actualiza genero
// .... (idea): no permite actualizar el nombre en caso de haber peliculas o personajes asociados al genero que se quiere eliminar
//
// DELETE /genres/:id => elimina genero
// .... (idea): no permite eliminar genero si hay peliculas o personajes asociados al mismo