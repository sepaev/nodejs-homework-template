const Contact = require('../../schemas/contact')
const getContactById = require('./getContactById')
const chalk = require('chalk')
const { NotFound } = require('http-errors')

async function updateStatusContact(id, { favorite }) {
  try {
    await Contact.updateOne({ _id: id }, { favorite })
    console.log(chalk.keyword('lightblue')('contact with id ' + id + ' set favorite:', favorite))
    return await getContactById(id)
  } catch (error) {
    throw new NotFound('Not found')
  }
}

module.exports = updateStatusContact
