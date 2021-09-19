const router = require('express').Router();
const MovieCtrl = require('../controllers/movieController');

router.get('/movies', MovieCtrl.getAll);
router.get('/movies/:id', MovieCtrl.getOne);
router.post('/movies', MovieCtrl.create);
router.put('/movies/:id', MovieCtrl.update);
router.delete('/movies/:id', MovieCtrl.deleteOne);
router.delete('/movies', MovieCtrl.deleteAll);

module.exports = router;