const listContacts = require('./listContacts')
const { checkNewContact, phoneToString } = require('../../helpers/functions')
const Contact = require('../../schemas/contact')
const getContactById = require('./getContactById')
const chalk = require('chalk')

async function updateContact(id, { name, email, phone, favorite = false }) {
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
    if (res.modifiedCount === 1) console.log(chalk.keyword('lightblue')('contact successfully edited'))
    return patchedContact
  } catch (error) {
    console.log(chalk.red('Catch error'), error.message)
    return error
  }
}

module.exports = updateContact
