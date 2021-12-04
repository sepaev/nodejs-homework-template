const { signup } = require('../../model/users')
const { BadRequest } = require('http-errors')
const schemaBody = require('../../middlewares/validation/userValidation')

async function signupController(req, res) {
  const body = req.body
  const { error } = schemaBody.validate(body)
  if (error) throw new BadRequest(error.message)

  const data = await signup(body)
  res.status(201).send(data)
}
module.exports = signupController
