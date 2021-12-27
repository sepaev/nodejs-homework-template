const { renewEmailToken } = require('../../model/users')
const { BadRequest } = require('http-errors')
const schemaVerificationEmail = require('../../middlewares/validation/verificationEmailValidation')
const { v4: uuidv4 } = require('uuid')
const sendEmail = require('../../helpers/sendemail')

async function renewEmailTokenController(req, res) {
  const { email } = req.body
  if (!email) throw new BadRequest('missing required field email')
  const { error } = schemaVerificationEmail.validate(email)
  if (error) throw new BadRequest(error.message)

  const token = uuidv4()

  await renewEmailToken(email, token)
  const subjectText = ' (ссылка обновлена)'
  sendEmail(email, token, subjectText)
  res.status(200).send({
    message: 'Verification email sent',
  })
}

module.exports = renewEmailTokenController
