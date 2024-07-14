const accessService = require("../services/accessService");
const accessController = {};

accessController.registerUser = async (req, res, next) => {
  try {
    const result = await accessService.registerUser(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

accessController.login = async (req, res, next) => {
  try {
    const result = await accessService.login(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = accessController;
