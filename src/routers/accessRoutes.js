const router = require('express').Router();
const accessController = require('../controllers/accessController');

router.post('/login',accessController.login)
router.post('/register',accessController.registerUser)

module.exports = router;