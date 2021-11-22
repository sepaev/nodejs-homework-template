const Contact = require('./db/Contact')

async function getContactById(contactId) {
  const contact = await Contact.where({ _id: contactId }).findOne()
  return contact
}

module.exports = getContactById
