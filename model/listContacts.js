const Contact = require('../model/contact')

async function listContacts() {
  try {
    const contacts = await Contact.find({})
    return contacts
  } catch (error) {
    console.log('Catch error', error.message)
    return error
  }
}

module.exports = listContacts
