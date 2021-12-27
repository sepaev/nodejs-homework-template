const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const updateUser = require('./updateUser')
const updateAvatar = require('./updateAvatar')
const verifyEmailToken = require('./verifyEmailToken')
const renewEmailToken = require('./renewEmailToken')

module.exports = {
  signup,
  login,
  logout,
  updateUser,
  updateAvatar,
  verifyEmailToken,
  renewEmailToken,
}
