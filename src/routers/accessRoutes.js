const router = require('express').Router();
const accessController = require('../controllers/accessController');

router.post('/login',accessController.login)
router.post('/register',accessController.registerUser)
router.post('/refresh-token',accessController.refreshTokens)

module.exports = router;