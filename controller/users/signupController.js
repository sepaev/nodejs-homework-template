const { signup } = require('../../model/users')
const { BadRequest } = require('http-errors')
const { schemaBody } = require('../../middlewares/validation/userValidation')
// const jwt = require('jsonwebtoken')
const sendEmail = require('../../helpers/sendemail')
const { v4: uuidv4 } = require('uuid')

async function signupController(req, res) {
  const { testmode = false } = req
  const { authorization = '' } = req.headers
  if (authorization) throw new BadRequest('Please logout')

  const { email, password } = req.body
  const { error } = schemaBody.validate(req.body)
  if (error) throw new BadRequest(error.message)
  // const verificationToken = jwt.sign({ body }, process.env.SECRET).split('.')[1]
  const verificationToken = uuidv4()

  const data = await signup(email, password, verificationToken)
  sendEmail(email, verificationToken)
  if (testmode) return { status: 201, data }
  res.status(201).send(data)
}
module.exports = signupController
