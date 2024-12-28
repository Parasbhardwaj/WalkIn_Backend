const router = require('express').Router();
const driveController = require('../controllers/driveController');
const {validateAccessToken} = require('../middlewares/jwtAuth')
// const {upload} = require("../libs/fileUpload")
const multer = require('multer');
router.post('/create',driveController.createDrive)
router.put('/update',driveController.updateDrive)
router.delete('/delete',driveController.deleteDrive)
router.get('/get',driveController.getDrive)
router.get('/getall',[validateAccessToken],driveController.getAllDrives)
// router.post('/upload',upload.array('files',10),driveController.uploadFiles)

const upload = multer({ dest: "uploads/" });

router.post('/upload',upload.single('file'),driveController.uploadFiles)
router.get('/download/:filename',driveController.downloadFiles)

module.exports = router;