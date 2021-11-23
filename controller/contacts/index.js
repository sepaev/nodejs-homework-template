const addContactController = require('./addContactController')
const getContactByIdController = require('./getContactByIdController')
const listContactsController = require('./listContactsController')
const removeContactController = require('./removeContactController')
const updateContactController = require('./updateContactController')
const updateStatusContactController = require('./updateStatusContactController')

module.exports = {
  addContactController,
  listContactsController,
  getContactByIdController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
}
