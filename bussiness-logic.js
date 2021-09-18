/** Nombre de la base de datos:  disney_world*/
//
/********************************************** */
/******** MODELOS BD *********/

/** PERSONAJE => character (tabla: characters)
 * ID => id
 * Imagen (url) => image
 * Nombre => name
 * Edad => age
 * Peso => weight
 * Historia => story
 * Peliculas o series asociadas => movies
 * (extra):
 * Fecha de creacion => createdAt
 * Fecha de actualizacion => updatedAt
*/

/** PELICULA O SERIE => movie (tabla: movies)
 * ID => id
 * Imagen (url) => image
 * Titulo => title
 * Calificacion => rating (1-5)
 * Personajes asociados => characters
 * Fecha de creacion => createdAt
 * (extra):
 * Fecha de actualizacion => updatedAt
 * 
*/


/** GENERO => genre (tabla: genres)
 * ID => id
 * Imagen (url) => image
 * Nombre => name
 * Peliculas o series asociadas => movies
 * (extra):
 * Fecha de creacion => createdAt
 * Fecha de actualizacion => updatedAt
*/



/********************************************** */
/******** ENDOPINTS *********/

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
// .... orden ASC | DESC (createdAt)
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