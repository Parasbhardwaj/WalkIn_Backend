const router = require('express').Router();
const driveController = require('../controllers/driveController');

router.post('/create',driveController.createDrive)
router.put('/update',driveController.updateDrive)
router.delete('/delete',driveController.deleteDrive)
router.get('/get',driveController.getDrive)
router.get('/getall',driveController.getAllDrives)

module.exports = router;