const { logout } = require('../../model/users')

async function logoutController(req, res) {
  const user = req.user

  const result = await logout(user._id)
  if (result) res.status(204).json()
}
module.exports = logoutController
