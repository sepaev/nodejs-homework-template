const { login } = require('../../model/users')
const { BadRequest } = require('http-errors')
const schemaBody = require('../../middlewares/validation/userValidation')

async function loginController(req, res) {
  const body = req.body
  const { error } = schemaBody.validate(body)
  if (error) throw new BadRequest(error.message)

  const data = await login(body)
  res.status(200).send(data)
}
module.exports = loginController
