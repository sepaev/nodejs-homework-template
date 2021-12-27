const getCurrentController = require('./getCurrentController')
const verifyEmailTokenController = require('./verifyEmailTokenController')
const renewEmailTokenController = require('./renewEmailTokenController')
const logoutController = require('./logoutController')
const loginController = require('./loginController')
const signupController = require('./signupController')
const patchUserController = require('./patchUserController')
const uploadAvatarController = require('./uploadAvatarController')

module.exports = {
  getCurrentController,
  verifyEmailTokenController,
  renewEmailTokenController,
  loginController,
  logoutController,
  signupController,
  patchUserController,
  uploadAvatarController,
}
