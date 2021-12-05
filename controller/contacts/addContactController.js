const { addContact } = require('../../model/contacts')
const { schemaBody } = require('../../middlewares/validation/contactValidation')
const { BadRequest } = require('http-errors')

async function addContactController(req, res) {
  const body = req.body
  const { error } = schemaBody.validate(body)
  if (error) throw new BadRequest({ message: error.message })

  const newContact = await addContact(body, req.user._id)
  res.status(201).send({ result: newContact })
}
module.exports = addContactController
