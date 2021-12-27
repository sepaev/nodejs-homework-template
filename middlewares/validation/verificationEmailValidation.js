const Joi = require('joi')

const verificationEmailValidation = Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: false } })
  .required()

module.exports = verificationEmailValidation
