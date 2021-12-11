const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middlewares/auth/authMiddleware')
const errorCatcher = require('../../middlewares/catch/errorCatcher')
const uploadMiddleware = require('../../middlewares/fs/uploadMiddleware')

const {
  signupController,
  loginController,
  logoutController,
  getCurrentController,
  patchUserController,
  uploadAvatarController,
} = require('../../controller/users')

router.patch('/avatars', authMiddleware, uploadMiddleware.single('avatar'), errorCatcher(uploadAvatarController))

router.post('/signup', errorCatcher(signupController))

router.post('/login', errorCatcher(loginController))

router.post('/logout', authMiddleware, errorCatcher(logoutController))

router.get('/current', authMiddleware, errorCatcher(getCurrentController))

router.patch('/', authMiddleware, errorCatcher(patchUserController))

module.exports = router
