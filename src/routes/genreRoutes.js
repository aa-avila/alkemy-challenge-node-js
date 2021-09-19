const router = require('express').Router();
const GenreCtrl = require('../controllers/genreController');

router.get('/genres', GenreCtrl.getAll);
router.get('/genres/:id', GenreCtrl.getOne);
router.post('/genres', GenreCtrl.create);
router.put('/genres/:id', GenreCtrl.update);
router.delete('/genres/:id', GenreCtrl.deleteOne);
router.delete('/genres', GenreCtrl.deleteAll);

module.exports = router;


