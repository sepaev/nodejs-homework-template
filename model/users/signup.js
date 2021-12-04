const User = require('../../schemas/user')
const chalk = require('chalk')
const { Conflict } = require('http-errors')

async function signup({ email, password }) {
  const users = await User.find({})
  const conflictMessage = users.reduce(
    (message, user) => (message = user.email === email ? 'Email in use' : message),
    '',
  )
  if (conflictMessage) throw new Conflict(conflictMessage)
  const newUser = await User.create({ email, password })
  console.log(chalk.keyword('lightblue')('user successfully created'))
  return { user: { email: newUser.email, subscription: newUser.subscription } }
}

module.exports = signup
