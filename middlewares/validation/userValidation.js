const Joi = require('joi')

const schemaBody = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .required(),
  password: Joi.string().min(5).max(8).required(),
})

const schemaSubscription = Joi.string().required().valid('starter', 'pro', 'business')
const schemaEmail = Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: false } })
  .required()
const schema = {
  schemaBody,
  schemaSubscription,
  schemaEmail,
}
module.exports = schema
