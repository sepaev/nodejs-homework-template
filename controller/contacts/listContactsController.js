const { listContacts } = require('../../model/contacts')

async function listContactsController(req, res) {
  const { _id } = req.user
  const response = await listContacts(_id, req.query)
  res.status(200).send(response)
}
module.exports = listContactsController
