const checkNewContact = require('./checkNewContact')
const isValidNewUser = require('./isValidNewUser')
const getMaxId = require('./getMaxId')
const phoneToString = require('./phoneToString')
const checkLoginData = require('./checkLoginData')
const resizeImage = require('./resizeImage')
const removeOldAvatar = require('./removeOldAvatar')

module.exports = {
  checkNewContact,
  isValidNewUser,
  getMaxId,
  phoneToString,
  checkLoginData,
  resizeImage,
  removeOldAvatar,
}
