const Contact = require('../schemas/contact')

async function getContactById(contactId) {
  const contact = await Contact.where({ _id: contactId }).findOne()
  return contact
}

module.exports = getContactById
