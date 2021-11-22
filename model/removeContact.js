const Contact = require('./db/Contact')
const getContactById = require('./getContactById')

async function removeContact(contactId) {
  try {
    const contact = await getContactById(contactId)
    if (!contact) {
      throw new Error('Not found')
    }
    const res = await Contact.remove({ _id: contactId })
    console.log('res - ', res)
    console.log('Contact with id - ' + contactId + ' removed successfully')
    return { message: null }
  } catch (error) {
    console.log('Catch error', error.message)
    return error
  }
}

module.exports = removeContact
