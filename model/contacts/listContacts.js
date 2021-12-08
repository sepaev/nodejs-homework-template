const Contact = require('../../schemas/contact')
const { myCustomLabels } = require('../../bin/settingsDB')

async function listContacts(userID, { favorite = null, page = 1, limit = 10 }) {
  const query = { owner: userID }
  const options = {
    select: 'name email phone favorite',
    sort: { name: -1 },
    populate: { path: 'owner', select: 'email subscription' },
    lean: false,
    page,
    limit,
    customLabels: myCustomLabels,
  }
  if (favorite === true || favorite === false) query.favorite = favorite
  return await Contact.paginate(query, options)
}

module.exports = listContacts
