// const { updateUser } = require('../../model/users')
// const { schemaSubscription, schemaEmail } = require('../../middlewares/validation/userValidation')
// const { BadRequest, Conflict } = require('http-errors')

async function uploadAvatarController(req, res) {
  // let key, value, error
  // const { _id } = req.user
  // if (req.query.subscription) {
  //   key = 'subscription'
  //   value = req.query.subscription.toLowerCase()
  //   error = schemaSubscription.validate(value).error
  // }
  // if (req.query.email) {
  //   key = 'email'
  //   value = req.query.email
  //   error = schemaEmail.validate(value).error
  // }
  // if (error) throw new BadRequest(error.message)
  // if (req.user[key] === value) throw new Conflict("No changes '" + key + "' value is already '" + value + "'")
  // const patchedUser = await updateUser(_id, key, value)
  // res.status(200).send({ result: patchedUser })
}

module.exports = uploadAvatarController
