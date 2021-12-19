const getCurrentController = require('./getCurrentController')
const emailVerificationController = require('./emailVerificationController')
const logoutController = require('./logoutController')
const loginController = require('./loginController')
const signupController = require('./signupController')
const patchUserController = require('./patchUserController')
const uploadAvatarController = require('./uploadAvatarController')

module.exports = {
  getCurrentController,
  emailVerificationController,
  loginController,
  logoutController,
  signupController,
  patchUserController,
  uploadAvatarController,
}
