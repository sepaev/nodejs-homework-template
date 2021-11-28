const express = require('express')
const router = express.Router()

const { signupController, loginController, logoutController, getCurrentController } = require('../../controller/users')

router.post('/signup', async (req, res) => signupController(req, res))

router.post('/login', async (req, res) => loginController(req, res))

router.post('/logout', async (req, res) => logoutController(req, res))

router.get('/current', async (req, res) => getCurrentController(req, res))

module.exports = router
