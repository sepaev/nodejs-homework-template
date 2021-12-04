const User = require('../../schemas/user')
const { Unauthorized } = require('http-errors')
const jwt = require('jsonwebtoken')

async function authMiddleware(req, res, next) {
  const { authorization = '' } = req.headers
  const [bearer, token] = authorization.split(' ')

  try {
    if (bearer !== 'Bearer') throw new Unauthorized()
    const { id } = jwt.verify(token, process.env.SECRET)
    const user = await User.findById(id)
    if (!user || !user.token) throw new Unauthorized()
    req.user = user
    next()
  } catch (error) {
    error.status = 401
    error.message = 'Not authorized'
    next(error)
  }
}
module.exports = authMiddleware
