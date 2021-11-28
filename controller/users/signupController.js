const { signup } = require('../../model/users')
const schemaBody = require('../../middlewares/validation/userValidation')
const chalk = require('chalk')

async function signupController(req, res) {
  const body = req.body
  const { error } = schemaBody.validate(body)

  if (error) {
    console.log(chalk.red('error - '), error)
    res.json({
      code: 400,
      status: 'Bad Request',
      'Content-Type': 'application/json',
      data: { message: error.message },
    })
    return
  }
  const newUser = await signup(body)
  if (newUser.message) {
    res.json({
      code: 409,
      status: 'Conflict',
      'Content-Type': 'application/json',
      data: { message: newUser.message },
    })
    return
  }
  res.json({
    code: 201,
    status: 'Created',
    'Content-Type': 'application/json',
    data: { user: { email: newUser.email, subscription: newUser.subscription } },
  })
}
module.exports = signupController
