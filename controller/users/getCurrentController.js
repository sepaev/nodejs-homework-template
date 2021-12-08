async function getCurrentController(req, res) {
  const { email, subscription } = req.user
  console.log('current user - ', { email, subscription })
  res.status(200).send({ email, subscription })
}

module.exports = getCurrentController
