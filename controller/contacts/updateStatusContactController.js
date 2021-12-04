const { updateStatusContact } = require('../../model/contacts')
const { schemaFavorite } = require('../../middlewares/validation/contactValidation')
const { BadRequest } = require('http-errors')

async function updateStatusContactController(req, res) {
  const { contactId } = req.params

  const body = req.body
  if (!body) throw new BadRequest({ message: 'missing field favorite' })

  const { error } = schemaFavorite.validate(body)
  if (error) throw new BadRequest({ message: error.message })

  const data = await updateStatusContact(contactId, body)

  res.status(200).send({ result: data })
}

module.exports = updateStatusContactController
