const Joi = require('joi')

const schemaVerificationToken = Joi.string().required()

module.exports = schemaVerificationToken
