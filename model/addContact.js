const listContacts = require('./listContacts')
const { checkNewContact, phoneToString } = require('../helpers/functions')

const Contact = require('../model/contact')

async function addContact({ name, email, phone, favorite }) {
  const contacts = await listContacts()
  const phoneString = phoneToString(phone)
  const newContact = { name, email, phone: phoneString, favorite }

  try {
    const checkData = checkNewContact(newContact, contacts)
    if (!checkData.result) throw new Error(checkData.message)
    const result = await Contact.create(newContact)
    console.log('result - ', result)
    console.log('contact successfully created')
    return result
  } catch (error) {
    console.log('Catch error', error.message)
    return error
  }
}

module.exports = addContact
