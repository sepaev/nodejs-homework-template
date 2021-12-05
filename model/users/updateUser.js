const { InternalServerError, Conflict } = require('http-errors')
const User = require('../../schemas/user')

const updateUser = async (userID, key, value) => {
  if (key === 'email') {
    const double = await User.find({ [key]: value })
    if (double.length > 0) {
      throw new Conflict('Duplicate key error ' + key + " '" + value + "' exists")
    }
  }

  try {
    console.log('here')
    await User.findByIdAndUpdate({ _id: userID }, { [key]: value })
    console.log(key, 'changed to ', value, 'successfully')
    const { _id, email, subscription } = await User.findById({ _id: userID })
    return { _id, email, subscription }
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}

module.exports = updateUser
