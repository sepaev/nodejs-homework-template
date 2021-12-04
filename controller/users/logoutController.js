const { logout } = require('../../model/users')
const { Unauthorized, BadRequest } = require('http-errors')
const { schemaBody } = require('../../middlewares/validation/contactValidation')

async function logoutController(req, res) {
  const body = req.body
  const { error } = schemaBody.validate(body)

  if (error) throw new BadRequest(error.message)

  const { message = '' } = await logout(body)
  if (message) throw new Unauthorized(message)
  res.status(204).json()
}
module.exports = logoutController
