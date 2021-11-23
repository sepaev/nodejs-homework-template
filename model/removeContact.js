const chalk = require('chalk')
const Contact = require('./db/Contact')
const getContactById = require('./getContactById')

async function removeContact(contactId) {
  try {
    const contact = await getContactById(contactId)
    if (!contact) {
      throw new Error('Not found')
    }
    const res = await Contact.remove({ _id: contactId })
    if (res.deletedCount === 1) {
      console.log(chalk.keyword('lightblue')('Contact _id:' + contactId + ' removed successfuly'))
    }
    return { message: null }
  } catch (error) {
    console.log(chalk.red('Catch error'), error.message)
    return error
  }
}

module.exports = removeContact
