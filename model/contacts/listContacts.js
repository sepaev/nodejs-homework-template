const Contact = require('../../schemas/contact')

async function listContacts(userID, favorite, pagination = {}) {
  const params = { owner: userID }
  console.log('params', params)
  console.log('pagination', pagination)
  if (favorite) params.favorite = favorite
  return await Contact.find({ owner: userID }, '', pagination).populate('owner', '_id email subscription')
}

module.exports = listContacts
