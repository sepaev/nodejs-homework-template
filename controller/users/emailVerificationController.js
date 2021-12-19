const { verifyEmailToken } = require('../../model/users')
const { BadRequest } = require('http-errors')
const schemaVerificationToken = require('../../middlewares/validation/verificationTokenValidation')

async function emailVerificationController(req, res) {
  const { verificationToken } = req.params
  const { error } = schemaVerificationToken.validate(verificationToken)
  if (error) throw new BadRequest(error.message)

  await verifyEmailToken(verificationToken)
  res.status(200).send({
    message: 'Verification successful',
  })
}

module.exports = emailVerificationController
