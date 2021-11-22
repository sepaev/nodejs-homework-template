const addContact = require('./addContact')
const getContactById = require('./getContactById')
const listContacts = require('./listContacts')
const removeContact = require('./removeContact')
const updateContact = require('./updateContact')
const Contact = require('./db/Contact')

module.exports = {
  addContact,
  listContacts,
  getContactById,
  removeContact,
  updateContact,
  Contact,
}
