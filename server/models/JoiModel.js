const Joi = require("joi");
const registerSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  website: Joi.string().required(),
  pocName: Joi.string().required(),
  designation: Joi.string().required(),
  registeredEmail: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["iitism.ac.in", "net"] },
  }),
});
module.exports = registerSchema;
