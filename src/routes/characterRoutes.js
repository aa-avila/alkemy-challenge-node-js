const router = require('express').Router();
const CharacterCtrl = require('../controllers/characterController');

router.get('/characters', CharacterCtrl.getAll);
router.get('/characters/:id', CharacterCtrl.getOne);
router.post('/characters', CharacterCtrl.create);
router.put('/characters/:id', CharacterCtrl.update);
router.delete('/characters/:id', CharacterCtrl.deleteOne);
router.delete('/characters', CharacterCtrl.deleteAll);

router.post('/characters/:character_id/movies', CharacterCtrl.addMovie);
router.delete('/characters/:character_id/movies/:movie_id', CharacterCtrl.deleteOneMovie);
router.delete('/characters/:character_id/movies', CharacterCtrl.deleteAllMovies);

module.exports = router;