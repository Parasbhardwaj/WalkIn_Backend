const accessService = require("../services/accessService");
const accessController = {};

accessController.registerUser = async (req, res, next) => {
  console.log(req.body);
  console.log("inside register user controller");
  try {
    const result = await accessService.registerUser(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

accessController.login = async (req, res, next) => {
  // console.log(req.headers);
  console.log(req.body);
  let result = await accessService.login(req.body);
  res.send(result);
};

module.exports = accessController;
