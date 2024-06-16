const Joi = require("joi");
const createHttpError = require("http-errors");

const getOtpSchema = Joi.object({
  phoneNumber: Joi.string()
    .length(11)
    .pattern(/^\+1\d{10}$/)
    .error(createHttpError.BadRequest("The entered phone number is not valid.")),
});

const checkOtpSchema = Joi.object({
  otp: Joi.string()
    .min(5)
    .max(6)
    .error(createHttpError.BadRequest("The sent code is not valid.")),
  phoneNumber: Joi.string()
    .length(12)
    .pattern(/^\+1\d{10}$/)
    .error(createHttpError.BadRequest("The entered phone number is not valid.")),
});

const completeProfileSchema = Joi.object({
  name: Joi.string()
    .min(5)
    .max(100)
    .error(createHttpError.BadRequest("The entered username is not valid.")),
  email: Joi.string()
    .email()
    .error(createHttpError.BadRequest("The entered email address is not valid.")),
  role: Joi.string()
    .required()
    .valid("FREELANCER", "OWNER")
    .error(createHttpError.BadRequest("The role is not valid.")),
});

const updateProfileSchema = Joi.object({
  name: Joi.string()
    .min(5)
    .max(50)
    .required()
    .error(createHttpError.BadRequest("The entered username is not valid.")),
  email: Joi.string()
    .required()
    .email()
    .error(createHttpError.BadRequest("The entered email address is not valid.")),
  phoneNumber: Joi.string()
    .length(12)
    .pattern(/^\+1\d{10}$/)
    .error(createHttpError.BadRequest("The entered mobile number is not valid.")),
  biography: Joi.string()
    .max(30)
    .allow("")
    .error(createHttpError.BadRequest("Specialized field is not valid.")),
});

module.exports = {
  getOtpSchema,
  completeProfileSchema,
  checkOtpSchema,
  updateProfileSchema,
};
