const router = require('express').Router();
const CharacterCtrl = require('../controllers/characterController');

router.get('/genres', CharacterCtrl.getAll);
router.get('/genres/:id', CharacterCtrl.getOne);
router.post('/genres', CharacterCtrl.create);
router.put('/genres/:id', CharacterCtrl.update);
router.delete('/genres/:id', CharacterCtrl.deleteOne);
router.delete('/genres', CharacterCtrl.deleteAll);

module.exports = router;