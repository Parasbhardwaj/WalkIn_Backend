const driveService = require("../services/driveService");
const driveController = {};
const path = require("path");
const fs = require("fs");

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

driveController.uploadFiles = async (req, res, next) => {
  // try {
  //   console.log("controller of upload");
  //   // console.log(req);
  //   console.log("body",req.body);
  //   console.log("files",req.files);
  //   const allFiles = req.files
  //   const result = await driveService.uploadFiles(allFiles);
  //   res.send(result);
  // } catch (error) {
  //   next(error);
  // }
  try {
    console.log("req.file.path",req.file.path);
    console.log("req.file",req.file);
    console.log("__dirname",__dirname);
    // console.log("",);
    const filePath1 = path.join(__dirname,"../../");
    const filePath = path.join(filePath1, req.file.path);
    console.log("filePath",filePath);
    const fileData = fs.readFileSync(filePath);
    console.log("fileData",fileData);
    const base64File = fileData.toString("base64");

    const fileDocument = {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      data: base64File,
    };

    // await collection.insertOne(fileDocument);
    const result = await driveService.uploadFiles(fileDocument);
    fs.unlinkSync(filePath); // Remove the file from the server after saving to MongoDB
    res.send(result);


  } catch (error) {
    next(error)
  }
};

driveController.downloadFiles = async (req, res, next) => {
  try {
    const fileInfo = {filename:req.params.filename }
    const result = await driveService.downloadFiles(fileInfo);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = driveController;
