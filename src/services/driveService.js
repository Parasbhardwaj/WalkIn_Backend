const Drive = require("../database/models/Drive");
const File = require("../database/models/File");
const driveService = {};

driveService.createDrive = async (driveData) => {
  try {
    let data = await Drive.create(driveData);
    if (data) {
      return {
        success: true,
        message: `Drive Created Succesfully`,
        data,
      };
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};

driveService.getAllDrives = async () => {
  try {
    let data = await Drive.find();
    if (data) {
      return {
        success: true,
        message: `All Drives Fetched Succesfully`,
        data,
      };
    }
  } catch (error) {
    throw error;
  }
};

driveService.uploadFiles = async (files) => {
  try {
    console.log(files);
    console.log("service of upload");
    const fileInfos = files.map((file) => ({
      filename: file.filename,
      path: file.path,
      originalname: file.originalname,
    }));
    const savedFiles = await File.insertMany(fileInfos);
    return savedFiles;
  } catch (error) {
    throw error;
  }
};

module.exports = driveService;
