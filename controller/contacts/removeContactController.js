const { removeContact } = require('../../model/contacts')
const { schemaId } = require('../../middlewares/validation/contactValidation')
const { BadRequest } = require('http-errors')

async function removeContactController(req, res) {
  const { contactId } = req.params
  const { error } = schemaId.validate(contactId)
  if (error) throw new BadRequest({ message: error.message })

  const result = await removeContact(contactId)
  if (result) res.status(200).send({ message: 'contact deleted' })
}

module.exports = removeContactController
