const { updateStatusContact } = require('../../model/contacts')

async function updateStatusContactController(req, res) {
  const { contactId } = req.params

  const data = await updateStatusContact(contactId, req.user._id)

  res.status(200).send({ result: data })
}

module.exports = updateStatusContactController
