const router = require('express').Router();
const driveController = require('../controllers/driveController');
const {validateAccessToken} = require('../middlewares/jwtAuth')
const {upload} = require("../libs/fileUpload")

router.post('/create',driveController.createDrive)
router.put('/update',driveController.updateDrive)
router.delete('/delete',driveController.deleteDrive)
router.get('/get',driveController.getDrive)
router.get('/getall',[validateAccessToken],driveController.getAllDrives)
router.post('/upload',upload.array('files',10),driveController.uploadFiles)

module.exports = router;