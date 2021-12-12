const User = require('../../schemas/user')
const chalk = require('chalk')
const { Conflict } = require('http-errors')
const gravatar = require('gravatar')

async function signup({ email, password }) {
  const users = await User.find({ email })
  if (users.length) throw new Conflict('Email in use')
  const avatarUrl = gravatar.url(email)
  const newUser = await User.create({ email, password, avatarUrl })
  console.log(chalk.keyword('lightblue')('user successfully created'))
  return {
    user: { email: newUser.email, subscription: newUser.subscription },
    token: newUser.token,
  }
}

module.exports = signup
