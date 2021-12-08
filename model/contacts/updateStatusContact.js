const Contact = require('../../schemas/contact')
const chalk = require('chalk')
const { NotFound } = require('http-errors')

async function updateStatusContact(id, ownerID) {
  try {
    const contact = await Contact.findOne({ _id: id, owner: ownerID }, '_id name email phone favorite owner').populate(
      'owner',
      '_id email subscription',
    )
    if (!contact) throw new Error()

    contact.favorite = !contact.favorite

    const { modifiedCount } = await Contact.updateOne({ _id: id }, { favorite: contact.favorite })
    if (!modifiedCount) throw new Error()

    console.log(chalk.keyword('lightblue')('contact with id ' + id + ' set favorite:', contact.favorite))
    return contact
  } catch (error) {
    throw new NotFound('Not found')
  }
}

module.exports = updateStatusContact
