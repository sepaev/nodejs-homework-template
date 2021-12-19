const User = require('../../schemas/user')
const { NotFound } = require('http-errors')

async function verifyEmailToken(token) {
  const user = await User.findOne({ verificationToken: token, verify: false })
  console.log(user)

  if (!user) throw new NotFound('User not found')

  await User.findByIdAndUpdate({ _id: user._id }, { verify: true, verificationToken: null })
  console.log('Verification successful')
}

module.exports = verifyEmailToken
