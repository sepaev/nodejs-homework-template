const bcrypt = require('bcrypt')

const checkLoginData = async (user, password) => {
  let result = true
  if (!user) {
    result = false
  } else {
    result = await bcrypt.compare(password, user.password)
  }
  const message = result ? '' : 'Email or password is wrong'
  return { result, message }
}

module.exports = checkLoginData
