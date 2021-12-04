const chalk = require('chalk')
const { NotFound } = require('http-errors')
const Contact = require('../../schemas/contact')

async function removeContact(contactId) {
  try {
    await Contact.remove({ _id: contactId })
    console.log(chalk.keyword('lightblue')('Contact _id:' + contactId + ' removed successfuly'))
    return true
  } catch (error) {
    throw new NotFound('Not found')
  }
}

module.exports = removeContact
