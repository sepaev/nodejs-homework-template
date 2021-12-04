const { listContacts } = require('../../model/contacts')

async function listContactsController(req, res) {
  const contacts = await listContacts(req.query.favorite)
  res.status(200).send({ result: contacts })
}
module.exports = listContactsController
