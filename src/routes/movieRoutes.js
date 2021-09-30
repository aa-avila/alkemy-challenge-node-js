const router = require('express').Router();
const MovieCtrl = require('../controllers/movieController');
const isAuth = require('../auth/isAuth');

router.get('/movies', isAuth, MovieCtrl.getAll);
router.get('/movies/:id', isAuth, MovieCtrl.getOne);
router.post('/movies', isAuth, MovieCtrl.create);
router.put('/movies/:id', isAuth, MovieCtrl.update);
router.delete('/movies/:id', isAuth, MovieCtrl.deleteOne);
router.delete('/movies', isAuth, MovieCtrl.deleteAll);

router.post('/movies/:movie_id/characters', isAuth, MovieCtrl.addCharacter);
router.delete('/movies/:movie_id/characters/:character_id', isAuth, MovieCtrl.deleteOneCharacter);
router.delete('/movies/:movie_id/characters', isAuth, MovieCtrl.deleteAllCharacters);



module.exports = router;