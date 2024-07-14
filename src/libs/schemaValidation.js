const Joi = require("joi");

const registerUserSchemaValidation = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(8).required(),
  userType: Joi.string().valid("Recruiter", "Jobseeker").required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  mobileNumber: Joi.string().min(10).max(10).required()
});

const loginUserSchemaValidation = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(8).required()
});

module.exports = { registerUserSchemaValidation, loginUserSchemaValidation };
