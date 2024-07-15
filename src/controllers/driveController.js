const driveService = require("../services/driveService");
const driveController = {};

driveController.createDrive = async (req, res, next) => {
  console.log(req.body);
  let result = await driveService.createDrive(req.body);
  res.send(result);
};

driveController.getAllDrives = async (req, res, next) => {
  try {
    const result = await driveService.getAllDrives();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

driveController.updateDrive = async (req, res, next) => {
  let result = driveService.getAllDrives();
  res.send(result);
};

driveController.deleteDrive = async (req, res, next) => {
  let result = driveService.getAllDrives();
  res.send(result);
};

driveController.getDrive = async (req, res, next) => {
  let result = driveService.getAllDrives();
  res.send(result);
};

module.exports = driveController;
