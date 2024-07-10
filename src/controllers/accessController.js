const accessService = require('../services/accessService')
const accessController = {};

accessController.registerUser = async (req, res, next) => {
    console.log(req.body)
    console.log("inside register user controller")
    let result = accessService.registerUser(req.body)
    res.send(result)
};

accessController.login = async(req, res, next) => {};

module.exports = accessController