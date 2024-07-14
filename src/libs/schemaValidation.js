const Joi = require('joi')

const userSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
    userType: Joi.string().valid('Recruiter', 'Jobseeker').required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    mobileNumber: Joi.string().min(10).max(10).required()
})

module.exports = userSchema