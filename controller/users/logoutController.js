const { logout } = require('../../model/users')
const { Unauthorized, BadRequest } = require('http-errors')
const { schemaBody } = require('../../middlewares/validation/contactValidation')

async function logoutController(req, res) {
  const body = req.body
  const { error } = schemaBody.validate(body)

  try {
    if (error) throw new BadRequest({ message: error.message })

    const response = await logout(body)
    if (response.message) throw new Unauthorized(response.message)
    res.status(204)
  } catch ({ status, message }) {
    res.status(status).send({ message })
  }
}
module.exports = logoutController
