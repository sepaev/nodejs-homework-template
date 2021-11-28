const checkNewUser = (email, users) => {
  let result = true
  let message = ''
  users.forEach(user => {
    if (user.email === email) {
      message = 'Email in use'
      result = false
    }
  })
  return { result, message }
}

module.exports = checkNewUser
