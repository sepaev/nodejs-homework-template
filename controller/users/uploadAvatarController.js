const path = require('path')
const fs = require('fs/promises')
const { updateAvatar } = require('../../model/users')
const { resizeImage } = require('../../helpers/')
const { PORT, PUBLIC_DIR, AVATARS_DIR } = process.env

async function uploadAvatarController(req, res) {
  const { path: tempUpload, originalname } = req.file
  const [filename, exstension] = originalname.split('.')
  const userID = req.user._id
  const HOST = req.host

  const avatarName = filename + '_' + userID + '.' + exstension
  try {
    const resultUpload = path.join(__dirname, '../../', PUBLIC_DIR, AVATARS_DIR, avatarName)
    await fs.rename(tempUpload, resultUpload)
    const avatarUrl = '/' + AVATARS_DIR + '/' + avatarName
    await resizeImage(path.join(PUBLIC_DIR, avatarUrl))
    await updateAvatar(userID, avatarUrl)
    res.status(200).json({ avatarUrl: `${HOST}:${PORT}${avatarUrl}` })
  } catch (error) {
    await fs.unlink(tempUpload)
  }
}

module.exports = uploadAvatarController
