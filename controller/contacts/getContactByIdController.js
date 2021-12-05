const { getContactById } = require('../../model/contacts')
const { schemaId } = require('../../middlewares/validation/contactValidation')
const { BadRequest } = require('http-errors')

async function getContactByIdController(req, res) {
  const { contactId } = req.params
  const { error } = schemaId.validate(contactId)

  if (error) throw new BadRequest({ message: error.message })

  const contact = await getContactById(contactId, req.user._id)

  res.status(200).send({ result: contact })
}

module.exports = getContactByIdController
