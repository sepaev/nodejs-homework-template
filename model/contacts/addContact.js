const listContacts = require('./listContacts')
const { checkNewContact, phoneToString } = require('../../helpers')

const Contact = require('../../schemas/contact')
const chalk = require('chalk')

async function addContact({ name, email, phone, favorite = false }, owner) {
  const contacts = await listContacts(owner)
  const phoneString = phoneToString(phone)
  const newContact = { name, email, phone: phoneString, favorite, owner }

  checkNewContact(newContact, contacts)

  const result = await Contact.create([newContact], ['_id', 'name', 'email', 'phone', 'owner'])
  console.log(chalk.keyword('lightblue')('contact successfully created'))
  return result
}

module.exports = addContact
