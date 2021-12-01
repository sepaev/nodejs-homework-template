const { signup } = require('../../model/users')
const { Conflict, BadRequest } = require('http-errors')
const schemaBody = require('../../middlewares/validation/userValidation')

async function signupController(req, res) {
  const body = req.body
  const { error } = schemaBody.validate(body)

  try {
    if (error) throw new BadRequest({ message: error.message })

    const newUser = await signup(body)
    if (newUser.message) throw new Conflict({ message: newUser.message })

    res.status(201).send({ user: newUser })
  } catch ({ status, message }) {
    res.status(status).send({ message })
  }
}
module.exports = signupController
