const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middlewares/auth/authMiddleware')
const errorCatcher = require('../../middlewares/catch/errorCatcher')

const {
  listContactsController,
  getContactByIdController,
  addContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
} = require('../../controller/contacts')

router.get('/', authMiddleware, errorCatcher(listContactsController))

router.get('/:contactId', authMiddleware, errorCatcher(getContactByIdController))

router.post('/', authMiddleware, errorCatcher(addContactController))

router.delete('/:contactId', authMiddleware, errorCatcher(removeContactController))

router.patch('/:contactId', authMiddleware, errorCatcher(updateContactController))

router.patch('/:contactId/favorite/', authMiddleware, errorCatcher(updateStatusContactController))

module.exports = router
