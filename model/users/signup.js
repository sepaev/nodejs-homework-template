const User = require('../../schemas/user')
const chalk = require('chalk')
const { Conflict } = require('http-errors')
const gravatar = require('gravatar')

async function signup({ email, password }) {
  const users = await User.find({})
  const conflictMessage = users.reduce(
    (message, user) => (message = user.email === email ? 'Email in use' : message),
    '',
  )
  if (conflictMessage) throw new Conflict(conflictMessage)
  const avatarUrl = gravatar.url(email)
  const newUser = await User.create({ email, password, avatarUrl })
  console.log(chalk.keyword('lightblue')('user successfully created'))
  return {
    user: { _id: newUser._id, email: newUser.email, subscription: newUser.subscription, avatarUrl: newUser.avatarUrl },
  }
}

module.exports = signup
