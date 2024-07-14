const User = require("../database/models/User");
const jwtAuth = require("../middlewares/jwtAuth");
const createError = require("http-errors");
const {
  registerUserSchemaValidation,
  loginUserSchemaValidation,
} = require("../libs/schemaValidation");
const {encryptPasssword, checkPassword} = require("../libs/encryptPassword");

const accessService = {};

accessService.registerUser = async (userData) => {
  try {
    // const { email, password, userType, firstName, lastName, mobileNumber } = userData
    // if( !email || !password || !userType || !firstName || !lastName || !mobileNumber) throw createError.BadRequest()

    const result = await registerUserSchemaValidation.validateAsync(userData);
    console.log(result);

    const userExist = await User.findOne({ email: result.email });
    if (userExist)
      throw createError.Conflict(`${result.email} is already been registered.`);

    const hashedPassword = await encryptPasssword(result.password);
    result.password = hashedPassword;

    const user = await User.create(result);

    return user;
    // if (data) {
    //   return {
    //     success: true,
    //     message: `User Registered Succesfully`,
    //     data,
    //   };
    // }
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    throw error;
  }
};

accessService.login = async (userData) => {
  try {
    const result = await loginUserSchemaValidation.validateAsync(userData);
    console.log("result",result);

    const user = await User.findOne({email: result.email})

    if(!user) throw createError.NotFound("User not registered.")

    const isPasswordMatch = await checkPassword(result.password, user.password)
    if(!isPasswordMatch) throw createError.Unauthorized("Username/Password not valid.")
    let accessToken = await jwtAuth.createAccessToken(userData);
    return {
      accessToken: accessToken,
    };
  } catch (error) {
    console.log("err",error);
    if (error.isJoi === true) throw createError.BadRequest("Invalid Username/Password")
    throw error;
  }
};

module.exports = accessService;
