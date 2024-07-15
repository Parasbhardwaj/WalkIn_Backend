const router = require('express').Router();
const driveController = require('../controllers/driveController');
const {validateAccessToken} = require('../middlewares/jwtAuth')

router.post('/create',driveController.createDrive)
router.put('/update',driveController.updateDrive)
router.delete('/delete',driveController.deleteDrive)
router.get('/get',driveController.getDrive)
router.get('/getall',[validateAccessToken],driveController.getAllDrives)

module.exports = router;