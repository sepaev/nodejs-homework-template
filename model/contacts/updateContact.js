const listContacts = require('./listContacts')
const { checkNewContact, phoneToString } = require('../../helpers')
const Contact = require('../../schemas/contact')
const chalk = require('chalk')
const { NotFound } = require('http-errors')

async function updateContact(id, { name, email, phone, favorite = false }) {
  const contacts = await listContacts()
  const patchedContact = { id, name, email, phone: phoneToString(phone), favorite }
  checkNewContact(patchedContact, contacts, id)
  try {
    const res = await Contact.updateOne({ _id: id }, patchedContact)
    if (res.modifiedCount === 1) console.log(chalk.keyword('lightblue')('contact successfully edited'))
    return patchedContact
  } catch (error) {
    throw new NotFound('Not found')
  }
}

module.exports = updateContact
