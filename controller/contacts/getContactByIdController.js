const { getContactById } = require('../../model')
const { schemaId } = require('../../middlewares/validation/contactValidation')
const chalk = require('chalk')

async function getContactByIdController(req, res) {
  const { contactId } = req.params
  const { error } = schemaId.validate(contactId)

  if (error) {
    console.log(chalk.red('error - '), error)
    res.status(400).send({ message: error.message })
    return
  }
  const contact = await getContactById(contactId)
  if (!contact) {
    res.status(404).send({ message: 'Not found' })
    return
  }
  res.json({
    status: 'Success',
    code: 200,
    data: { result: contact },
  })
}

module.exports = getContactByIdController
