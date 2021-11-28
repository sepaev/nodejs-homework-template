const chalk = require('chalk')
const User = require('../../schemas/user')

async function getUsers() {
  try {
    const users = await User.find({})
    return users
  } catch (error) {
    console.log(chalk.red('Catch error'), error.message)
    return error
  }
}

module.exports = getUsers
