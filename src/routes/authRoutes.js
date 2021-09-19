const router = require('express').Router();
const AuthCtrl = require('../controllers/authController');

router.post('/auth/login', AuthCtrl.login);
router.post('/auth/register', AuthCtrl.register);

module.exports = router;