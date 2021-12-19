const jwt = require('jsonwebtoken')
const User = require('../../schemas/user')
const Unautorized = require('http-errors')

async function login({ email, password }) {
  const user = await User.findOne({ email })
  if (!user || !user.comparePassword(password)) throw new Unautorized('Email or password is wrong')
  if (!user.verify) throw new Unautorized('Please confirm your Email')
  const token = jwt.sign({ id: user._id }, process.env.SECRET)

  await User.findByIdAndUpdate({ _id: user._id }, { token: token })
  console.log('login success - token', token)
  return { token, user: { email: user.email, subscription: user.subscription } }
}

module.exports = login
