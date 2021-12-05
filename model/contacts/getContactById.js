const { NotFound } = require('http-errors')
const Contact = require('../../schemas/contact')

async function getContactById(contactId, ownerID) {
  const contact = await Contact.findOne({ _id: contactId, owner: ownerID }, '_id name email phone favorite').populate(
    'owner',
    '_id email subscription',
  )
  if (!contact) throw new NotFound('Not found')
  return contact
}

module.exports = getContactById
