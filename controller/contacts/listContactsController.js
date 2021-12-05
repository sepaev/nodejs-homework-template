const { listContacts } = require('../../model/contacts')

async function listContactsController(req, res) {
  // const { favorite, page = 1, limit = 10 } = req.query
  const { _id } = req.user
  // const pagination = { skip: (page - 1) * limit, limit: parseInt(limit) }
  const response = await listContacts(_id, req.query)
  res.status(200).send(response)
}
module.exports = listContactsController
