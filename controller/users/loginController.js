const { login } = require('../../model/users')
const { Unauthorized, BadRequest } = require('http-errors')
const schemaBody = require('../../middlewares/validation/userValidation')

async function loginController(req, res) {
  const body = req.body
  const { error } = schemaBody.validate(body)

  try {
    if (error) throw new BadRequest({ message: error.message })

    const response = await login(body)
    if (response.message) throw new Unauthorized(response.message)
    const { token, user } = response
    res.status(200).send({ token, user })
  } catch ({ status, message }) {
    res.status(status).send({ message })
  }
}
module.exports = loginController
