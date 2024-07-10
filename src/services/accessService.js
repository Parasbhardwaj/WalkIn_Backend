const User = require("../database/models/User");
const accessService = {};

accessService.registerUser = async (userData) => {
  try {
    let data = await User.create(userData);
    if (data) {
      return {
        success: true,
        message: `User Registered Succesfully`,
        data,
      };
    }
  } catch (e) {
    console.log(e);
    return e
  }
};

module.exports = accessService;
