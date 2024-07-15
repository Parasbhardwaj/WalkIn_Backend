const Drive = require("../database/models/Drive");
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
    return e
  }
};

driveService.getAllDrives = async ()=>{
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
    throw error
  }
}

module.exports = driveService;
