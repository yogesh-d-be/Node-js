const joi = require('joi');

const userJoiSchema = joi.object({
    userName: joi.string().required().min(3).max(25),
    mobileNumber: joi.number().required(),
    email: joi.string().email().required(),
});


module.exports = userJoiSchema;