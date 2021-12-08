const User = require('../../schemas/user')

async function logout(_id) {
  await User.findByIdAndUpdate({ _id }, { token: null })
  console.log('logout - success')
  return true
}

module.exports = logout
