const jwt = require('jsonwebtoken')
const User = require('../../schemas/user')
const chalk = require('chalk')
const Unautorized = require('http-errors')

async function login({ email, password }) {
  const user = await User.findOne({ email })
  console.log('user -', user)
  try {
    if (!user || !user.comparePassword(password)) throw new Unautorized('Email or password is wrong')
    const token = jwt.sign({ id: user._id }, process.env.SECRET)
    console.log('here')
    console.log(await User.findByIdAndUpdate({ _id: user._id }, { token: token }))
    return { token, user: { email: user.email, subscription: user.subscription } }
  } catch (error) {
    console.log(chalk.red('Catch error'), error.message)
    return error
  }
}

module.exports = login
