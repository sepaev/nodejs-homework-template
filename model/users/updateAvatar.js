const { InternalServerError } = require('http-errors')
const User = require('../../schemas/user')

const updateAvatar = async (userID, avatarUrl) => {
  try {
    await User.findByIdAndUpdate({ _id: userID }, { avatarUrl })
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

module.exports = updateAvatar
