const listContacts = require('./listContacts')
const { checkNewContact, phoneToString } = require('../../helpers')

const Contact = require('../../schemas/contact')
const chalk = require('chalk')

async function addContact({ name, email, phone, favorite = false }) {
  const contacts = await listContacts()
  const phoneString = phoneToString(phone)
  const newContact = { name, email, phone: phoneString, favorite }

  checkNewContact(newContact, contacts)

  const result = await Contact.create(newContact)
  console.log(chalk.keyword('lightblue')('contact successfully created'))
  return result
}

module.exports = addContact
