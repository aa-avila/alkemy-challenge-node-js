const router = require('express').Router();
const GenreCtrl = require('../controllers/genreController');
const isAuth = require('../auth/isAuth');

router.get('/genres', isAuth, GenreCtrl.getAll);
router.get('/genres/:id', isAuth, GenreCtrl.getOne);
router.post('/genres', isAuth, GenreCtrl.create);
router.put('/genres/:id', isAuth, GenreCtrl.update);
router.delete('/genres/:id', isAuth, GenreCtrl.deleteOne);
router.delete('/genres', isAuth, GenreCtrl.deleteAll);

module.exports = router;


