const User = require("../database/models/User");
const jwtAuth = require('../middlewares/jwtAuth')
const createError = require('http-errors')
const userSchema = require('../libs/schemaValidation')
const encryptPasssword = require('../libs/encryptPassword')

const accessService = {};

accessService.registerUser = async (userData) => {
  try {
    // const { email, password, userType, firstName, lastName, mobileNumber } = userData
    // if( !email || !password || !userType || !firstName || !lastName || !mobileNumber) throw createError.BadRequest()
    
    const result = await userSchema.validateAsync(userData)
    console.log(result);

    const userExist = await User.findOne({email: result.email})
    if(userExist) throw createError.Conflict(`${result.email} is already been registered.`)

    const hashedPassword = await encryptPasssword(result.password)
    result.password = hashedPassword

    const user = await User.create(result);

    return user
    // if (data) {
    //   return {
    //     success: true,
    //     message: `User Registered Succesfully`,
    //     data,
    //   };
    // }
  } catch (error) {
    if(error.isJoi === true) error.status = 422
    throw error
  }
};

accessService.login = async (userData) => {
  try {
    let jwtRes = await jwtAuth.createToken(userData)
    console.log(jwtRes);
    return jwtRes
    // let data = await User.create(userData);
    // if (data) {
    //   return {
    //     success: true,
    //     message: `User Registered Succesfully`,
    //     data,
    //   };
    // }

  } catch (e) {
    console.log(e);
    return e
  }
};

module.exports = accessService;
