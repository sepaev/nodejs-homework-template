const listContacts = require('./listContacts')
const { checkNewContact, phoneToString } = require('../helpers/functions')
const Contact = require('./db/Contact')
const getContactById = require('./getContactById')

async function updateContact(id, { name, email, phone, favorite }) {
  const contacts = await listContacts()
  const phoneString = phoneToString(phone)
  const patchedContact = { id, name, email, phone: phoneString, favorite }

  try {
    const contact = await getContactById(id)
    if (!contact) {
      throw new Error('Not found')
    }
    const checkData = checkNewContact(patchedContact, contacts, id)
    if (!checkData.result) throw new Error(checkData.message)
    const res = await Contact.updateOne({ _id: id }, patchedContact)
    if (res.modifiedCount === 1) console.log('contact successfully edited')
    return patchedContact
  } catch (error) {
    console.log('Catch error', error.message)
    return error
  }
}

module.exports = updateContact
