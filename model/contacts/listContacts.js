// const chalk = require('chalk')
const Contact = require('../../schemas/contact')

async function listContacts(mode) {
  if (mode) {
    return await Contact.find({ favorite: mode })
  } else {
    return await Contact.find({})
  }
}

module.exports = listContacts
