const { checkNewUser } = require('../../helpers')
const User = require('../../schemas/user')
const chalk = require('chalk')

async function signup({ email, password }) {
  const users = await User.find({})
  try {
    const checkData = checkNewUser(email, users)
    if (!checkData.result) throw new Error(checkData.message)
    const result = await User.create({ email, password })
    console.log(chalk.keyword('lightblue')('user successfully created'))
    return { email: result.email, subscription: result.subscription }
  } catch (error) {
    console.log(chalk.red('Catch error'), error.message)
    return error
  }
}

module.exports = signup
