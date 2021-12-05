const { listContacts } = require('../../model/contacts')

async function listContactsController(req, res) {
  const { favorite, page = 1, limit = 10 } = req.query
  const { _id } = req.user
  const pagination = { skip: (page - 1) * limit, limit: parseInt(limit) }
  const contacts = await listContacts(_id, favorite, pagination)
  res.status(200).send({ page, result: contacts })
}
module.exports = listContactsController
