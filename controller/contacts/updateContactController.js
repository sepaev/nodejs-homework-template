const { updateContact } = require('../../model/contacts')
const { schemaId, schemaBody } = require('../../middlewares/validation/contactValidation')
const { BadRequest } = require('http-errors')

async function updateContactController(req, res) {
  const body = req.body
  const { contactId } = req.params
  let { error } = schemaBody.validate(body)
  if (!error) error = schemaId.validate(contactId).error

  if (error) throw new BadRequest({ message: error.message })
  const patchedContact = await updateContact(contactId, body)

  res.status(200).send({ result: patchedContact })
}

module.exports = updateContactController
