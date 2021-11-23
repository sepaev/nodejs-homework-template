const { updateContact } = require('../../model')
const { schemaId, schemaBody } = require('../../middlewares/validation/contactValidation')
const chalk = require('chalk')

async function updateContactController(req, res) {
  const body = req.body
  const { contactId } = req.params
  let { error } = schemaBody.validate(body)
  if (!error) error = schemaId.validate(contactId).error

  if (error) {
    console.log(chalk.red('error - '), error)
    res.status(400).send({ message: error.message })
    return
  }
  const patchedContact = await updateContact(contactId, body)
  if (patchedContact.message) {
    const code = patchedContact.message === 'Not found' ? 404 : 400
    res.status(code).send({ error: patchedContact.message })
    return
  }
  res.json({
    status: 'Success',
    code: 200,
    data: { result: patchedContact },
  })
}

module.exports = updateContactController
