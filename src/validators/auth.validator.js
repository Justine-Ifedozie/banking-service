const Joi = require('joi');

const registerSchema = Joi.object({
  email: Joi.string().email().required(),

  phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),

  password: Joi.string()
    .min(6)
    .required(),

  firstName: Joi.string()
    .min(2)
    .required(),

  lastName: Joi.string()
    .min(2)
    .required(),
}).options({ abortEarly: true });

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
