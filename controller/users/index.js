const getCurrentController = require('./getCurrentController')
const logoutController = require('./logoutController')
const loginController = require('./loginController')
const signupController = require('./signupController')
const patchUserController = require('./patchUserController')

module.exports = {
  getCurrentController,
  loginController,
  logoutController,
  signupController,
  patchUserController,
}
