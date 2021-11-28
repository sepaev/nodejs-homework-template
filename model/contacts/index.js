const addContact = require('./addContact')
const getContactById = require('./getContactById')
const listContacts = require('./contacts/listContacts')
const removeContact = require('./contacts/removeContact')
const updateContact = require('./contacts/updateContact')
const updateStatusContact = require('./updateStatusContact')

module.exports = {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContact,
  updateStatusContact,
}
