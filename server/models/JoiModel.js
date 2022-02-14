const Joi = require("joi");
const registerSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  website: Joi.string().required(),
  pocName: Joi.string().required(),
  designation: Joi.string().required(),
  registeredEmail: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  mobileNumber: Joi.number().required().min(10),
});
module.exports = registerSchema;
