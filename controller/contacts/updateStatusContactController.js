const { updateStatusContact } = require('../../model')
const { schemaFavorite } = require('../../middlewares/validation/contactValidation')
const chalk = require('chalk')

async function updateStatusContactController(req, res) {
  const { contactId } = req.params
  const body = req.body
  if (!body) {
    console.log(chalk.red('error - '), 'Missing body')
    res.status(400).send({ message: 'missing field favorite' })
    return
  }
  const { error } = schemaFavorite.validate(body)

  if (error) {
    console.log(chalk.red('error - '), error)
    res.status(400).send({ message: 'missing field favorite' })
    return
  }
  const data = await updateStatusContact(contactId, body)
  if (data.message) {
    res.status(404).send({ error: data.message })
    return
  }
  res.json({
    status: 'Success',
    code: 200,
    data: { result: data },
  })
}

module.exports = updateStatusContactController
