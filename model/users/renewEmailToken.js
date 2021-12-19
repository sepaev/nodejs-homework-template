const User = require('../../schemas/user')
const { NotFound, BadRequest } = require('http-errors')

async function renewEmailToken(email, token) {
  const user = await User.findOne({ email })

  if (!user) throw new NotFound('User not found')
  if (user.verify) throw new BadRequest('Verification has already been passed')

  await User.findByIdAndUpdate({ _id: user._id }, { verificationToken: token })
  console.log('Email token was updated')
}

module.exports = renewEmailToken
