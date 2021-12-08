const chalk = require('chalk')
const { NotFound } = require('http-errors')
const Contact = require('../../schemas/contact')

async function removeContact(contactId, ownerId) {
  try {
    const { deletedCount } = await Contact.deleteOne({ _id: contactId, owner: ownerId })
    console.log('deletedCount', deletedCount)
    if (!deletedCount) throw new NotFound('Not found')
    console.log(chalk.keyword('lightblue')('Contact _id:' + contactId + ' removed successfuly'))
    return true
  } catch (error) {
    throw new NotFound('Not found')
  }
}

module.exports = removeContact
