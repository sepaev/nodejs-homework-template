const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const updateUser = require('./updateUser')
const updateAvatar = require('./updateAvatar')
const verifyEmailToken = require('./verifyEmailToken')

module.exports = {
  signup,
  login,
  logout,
  updateUser,
  updateAvatar,
  verifyEmailToken,
}
