const { signup } = require('../../model/users')
const { BadRequest } = require('http-errors')
const { schemaBody } = require('../../middlewares/validation/userValidation')
const jwt = require('jsonwebtoken')
const sendEmail = require('../../helpers/sendemail')

async function signupController(req, res) {
  const { testmode = false } = req
  const { authorization = '' } = req.headers
  if (authorization) throw new BadRequest('Please logout')

  const body = req.body
  const { error } = schemaBody.validate(body)
  if (error) throw new BadRequest(error.message)
  body.verificationToken = jwt.sign({ body }, process.env.SECRET).split('.')[1]
  console.log(body)
  const data = await signup(body)
  sendEmail(body)
  if (testmode) return { status: 201, data }
  res.status(201).send(data)
}
module.exports = signupController
