const chalk = require('chalk')
const Contact = require('../../schemas/contact')

async function listContacts() {
  try {
    const contacts = await Contact.find({})
    return contacts
  } catch (error) {
    console.log(chalk.red('Catch error'), error.message)
    return error
  }
}

module.exports = listContacts
