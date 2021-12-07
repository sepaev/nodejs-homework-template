const { checkNewContact, phoneToString } = require('../../helpers')
const Contact = require('../../schemas/contact')
const chalk = require('chalk')
const { NotFound } = require('http-errors')

async function updateContact(id, { name, email, phone, favorite = false }, ownerID) {
  const contacts = await Contact.find({ _id: { $nin: id }, owner: { $in: ownerID } })

  const patchedContact = { id, name, email, phone: phoneToString(phone), favorite }
  checkNewContact(patchedContact, contacts, id)
  try {
    const { modifiedCount } = await Contact.updateOne({ _id: id, owner: ownerID }, patchedContact)
    if (!modifiedCount) throw new Error()
    console.log(chalk.keyword('lightblue')('contact successfully edited'))
    return patchedContact
  } catch (error) {
    throw new NotFound('Not found')
  }
}

module.exports = updateContact
