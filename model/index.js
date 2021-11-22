const addContact = require('./addContact')
const getContactById = require('./getContactById')
const listContacts = require('./listContacts')
const removeContact = require('./removeContact')
const updateContact = require('./updateContact')
const Contact = require('./contact')

module.exports = {
  addContact,
  listContacts,
  getContactById,
  removeContact,
  updateContact,
  Contact,
}
