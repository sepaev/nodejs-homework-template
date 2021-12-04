const { NotFound } = require('http-errors')
const Contact = require('../../schemas/contact')

async function getContactById(contactId) {
  const contact = await Contact.findById(contactId)
  if (!contact) throw new NotFound('Not found')
  return contact
}

module.exports = getContactById
