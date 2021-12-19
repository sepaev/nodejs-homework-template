const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middlewares/auth/authMiddleware')
const errorCatcher = require('../../middlewares/catch/errorCatcher')
const uploadMiddleware = require('../../middlewares/fs/uploadMiddleware')

const {
  signupController,
  loginController,
  renewEmailTokenController,
  logoutController,
  getCurrentController,
  verifyEmailTokenController,
  patchUserController,
  uploadAvatarController,
} = require('../../controller/users')

router.post('/signup', errorCatcher(signupController))

router.post('/login', errorCatcher(loginController))

router.post('/logout', authMiddleware, errorCatcher(logoutController))

router.get('/current', authMiddleware, errorCatcher(getCurrentController))

router.post('/verify', errorCatcher(renewEmailTokenController))

router.get('/verify/:verificationToken', errorCatcher(verifyEmailTokenController))

router.patch('/', authMiddleware, errorCatcher(patchUserController))

router.patch('/avatars', authMiddleware, uploadMiddleware.single('avatar'), errorCatcher(uploadAvatarController))

module.exports = router
