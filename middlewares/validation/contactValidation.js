const Joi = require('joi')

const schemaBody = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z ]+$/, 'only letters')
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/, 'only numbers')
    .required(),
  favorite: Joi.boolean(),
})

const schemaId = Joi.string().required()

const schema = {
  schemaBody,
  schemaId,
}

module.exports = schema
