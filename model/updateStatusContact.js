const Contact = require('../schemas/contact')
const getContactById = require('./getContactById')
const chalk = require('chalk')

async function updateStatusContact(id, { favorite }) {
  try {
    const contact = await getContactById(id)
    if (!contact) {
      throw new Error('Not found')
    }
    if (contact.favorite === favorite) return contact
    const res = await Contact.updateOne({ _id: id }, { favorite })
    if (res.modifiedCount === 1) {
      console.log(chalk.keyword('lightblue')('contact with id ' + id + ' set favorite:', favorite))
    }
    return await getContactById(id)
  } catch (error) {
    console.log(chalk.red('Catch error'), error.message)
    return error
  }
}

module.exports = updateStatusContact
