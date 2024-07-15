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

accessController.refreshTokens = async (req, res, next) => {
  try {
    const reqData = req.body
    const refreshToken = reqData.refreshToken
    console.log("refreshToken in controller",refreshToken);
    const result = await accessService.refreshTokens(refreshToken);
    res.send(result);
  } catch (error) {
    next(error);
  }
};


module.exports = accessController;
