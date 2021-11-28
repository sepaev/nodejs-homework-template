const Joi = require('joi')

const schemaBody = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .min(5)
    .max(8)
    // .pattern(/^[0-9]+$/, 'only numbers')
    .required(),
})

module.exports = schemaBody
