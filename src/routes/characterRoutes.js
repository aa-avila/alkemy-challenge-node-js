const router = require('express').Router();
const CharacterCtrl = require('../controllers/characterController');
const isAuth = require('../auth/isAuth');

router.get('/characters', isAuth, CharacterCtrl.getAll);
router.get('/characters/:id', isAuth, CharacterCtrl.getOne);
router.post('/characters', isAuth, CharacterCtrl.create);
router.put('/characters/:id', isAuth, CharacterCtrl.update);
router.delete('/characters/:id', isAuth, CharacterCtrl.deleteOne);
router.delete('/characters', isAuth, CharacterCtrl.deleteAll);

router.post('/characters/:character_id/movies', isAuth, CharacterCtrl.addMovie);
router.delete('/characters/:character_id/movies/:movie_id', isAuth, CharacterCtrl.deleteOneMovie);
router.delete('/characters/:character_id/movies', isAuth, CharacterCtrl.deleteAllMovies);

module.exports = router;